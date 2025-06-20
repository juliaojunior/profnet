import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db, googleProvider } from '@/core/firebase/config'
import type { User, LoginData, RegisterData, UserProfile } from '@/types'

export class AuthService {
  // Login com email e senha
  static async loginWithEmail(data: LoginData) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      const user = await this.getUserData(userCredential.user)
      return { success: true, data: user }
    } catch (error: any) {
      return { 
        success: false, 
        error: this.getErrorMessage(error.code) 
      }
    }
  }

  // Login com Google
  static async loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const firebaseUser = result.user
      
      // Verificar se o usuário já existe no Firestore
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
      
      if (!userDoc.exists()) {
        // Criar novo usuário no Firestore
        const newUser: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email!,
          displayName: firebaseUser.displayName || '',
          photoURL: firebaseUser.photoURL || undefined,
          userType: 'teacher', // Padrão para novos usuários
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
        await setDoc(doc(db, 'users', firebaseUser.uid), newUser)
        return { success: true, data: newUser }
      } else {
        const user = await this.getUserData(firebaseUser)
        return { success: true, data: user }
      }
    } catch (error: any) {
      return { 
        success: false, 
        error: this.getErrorMessage(error.code) 
      }
    }
  }

  // Registro com email e senha
  static async register(data: RegisterData) {
    try {
      if (data.password !== data.confirmPassword) {
        return { success: false, error: 'As senhas não coincidem' }
      }

      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const firebaseUser = userCredential.user

      // Atualizar perfil do Firebase Auth
      await updateProfile(firebaseUser, {
        displayName: data.name
      })

      // Criar usuário no Firestore
      const newUser: User = {
        uid: firebaseUser.uid,
        email: data.email,
        displayName: data.name,
        userType: data.userType,
        profile: {
          name: data.name,
          area: data.area,
          network: data.network
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }

      await setDoc(doc(db, 'users', firebaseUser.uid), newUser)
      return { success: true, data: newUser }
    } catch (error: any) {
      return { 
        success: false, 
        error: this.getErrorMessage(error.code) 
      }
    }
  }

  // Logout
  static async logout() {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error: any) {
      return { 
        success: false, 
        error: 'Erro ao fazer logout' 
      }
    }
  }

  // Obter dados do usuário do Firestore
  static async getUserData(firebaseUser: FirebaseUser): Promise<User> {
    const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
    
    if (userDoc.exists()) {
      const userData = userDoc.data()
      return {
        ...userData,
        createdAt: userData.createdAt?.toDate() || new Date(),
        updatedAt: userData.updatedAt?.toDate() || new Date()
      } as User
    } else {
      // Criar usuário básico se não existir
      const newUser: User = {
        uid: firebaseUser.uid,
        email: firebaseUser.email!,
        displayName: firebaseUser.displayName || '',
        photoURL: firebaseUser.photoURL || undefined,
        userType: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      await setDoc(doc(db, 'users', firebaseUser.uid), newUser)
      return newUser
    }
  }

  // Atualizar perfil do usuário
  static async updateUserProfile(uid: string, profile: Partial<UserProfile>) {
    try {
      await updateDoc(doc(db, 'users', uid), {
        profile: profile,
        updatedAt: new Date()
      })
      return { success: true }
    } catch (error: any) {
      return { 
        success: false, 
        error: 'Erro ao atualizar perfil' 
      }
    }
  }

  // Observer de mudanças de autenticação
  static onAuthStateChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const user = await this.getUserData(firebaseUser)
        callback(user)
      } else {
        callback(null)
      }
    })
  }

  // Traduzir códigos de erro do Firebase
  private static getErrorMessage(errorCode: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/user-not-found': 'Usuário não encontrado',
      'auth/wrong-password': 'Senha incorreta',
      'auth/email-already-in-use': 'Este email já está em uso',
      'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres',
      'auth/invalid-email': 'Email inválido',
      'auth/user-disabled': 'Usuário desabilitado',
      'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde',
      'auth/network-request-failed': 'Erro de conexão. Verifique sua internet',
      'auth/popup-closed-by-user': 'Login cancelado pelo usuário',
      'auth/cancelled-popup-request': 'Login cancelado',
      'auth/popup-blocked': 'Popup bloqueado pelo navegador'
    }

    return errorMessages[errorCode] || 'Erro desconhecido. Tente novamente'
  }
}

