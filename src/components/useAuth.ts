// src/composables/useAuth.ts
import { ref, computed, onMounted, readonly } from 'vue'
import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, googleProvider, db } from '@/services/firebase'
import type { UserProfile } from '@/types/auth.types'

export const useAuth = () => {
  const user = ref<User | null>(null)
  const userProfile = ref<UserProfile | null>(null)
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  const loginWithGoogle = async () => {
    try {
      isLoading.value = true
      error.value = null
      
      const result = await signInWithPopup(auth, googleProvider)
      const authUser = result.user

      // Verificar se perfil existe no Firestore
      const profileRef = doc(db, 'profiles', authUser.uid)
      const profileSnap = await getDoc(profileRef)

      if (!profileSnap.exists()) {
        // Criar novo perfil
        const newProfile: UserProfile = {
          uid: authUser.uid,
          email: authUser.email!,
          displayName: authUser.displayName!,
          photoURL: authUser.photoURL,
          userType: 'professor',
          createdAt: new Date(),
          lastLogin: new Date()
        }
        await setDoc(profileRef, newProfile)
        userProfile.value = newProfile
      } else {
        // Atualizar último login
        await updateDoc(profileRef, { lastLogin: new Date() })
        userProfile.value = profileSnap.data() as UserProfile
      }
      
      return authUser
    } catch (err: any) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      userProfile.value = null
    } catch (err: any) {
      error.value = err.message
      throw err
    }
  }

  onMounted(() => {
    onAuthStateChanged(auth, async (authUser) => {
      user.value = authUser
      if (authUser) {
        const profileRef = doc(db, 'profiles', authUser.uid)
        const profileSnap = await getDoc(profileRef)
        if (profileSnap.exists()) {
          userProfile.value = profileSnap.data() as UserProfile
        }
      } else {
        userProfile.value = null
      }
      isLoading.value = false
    })
  })

  return {
    user: readonly(user),
    userProfile: readonly(userProfile),
    isAuthenticated,
    isLoading: readonly(isLoading),
    error: readonly(error),
    loginWithGoogle,
    logout
  }
}
