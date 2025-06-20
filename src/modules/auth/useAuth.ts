import { ref, reactive, computed } from 'vue'
import { AuthService } from './authService'
import type { User, LoginData, RegisterData, AuthState } from '@/types'

// Estado global da autenticação
const authState = reactive<AuthState>({
  user: null,
  loading: true,
  error: null
})

// Composable para autenticação
export function useAuth() {
  // Getters computados
  const isAuthenticated = computed(() => !!authState.user)
  const isAdmin = computed(() => authState.user?.userType === 'admin')
  const isTeacher = computed(() => authState.user?.userType === 'teacher')
  const currentUser = computed(() => authState.user)
  const isLoading = computed(() => authState.loading)
  const error = computed(() => authState.error)

  // Ações
  const setUser = (user: User | null) => {
    authState.user = user
    authState.loading = false
    authState.error = null
  }

  const setLoading = (loading: boolean) => {
    authState.loading = loading
  }

  const setError = (error: string | null) => {
    authState.error = error
  }

  const clearError = () => {
    authState.error = null
  }

  // Login com email e senha
  const login = async (data: LoginData) => {
    setLoading(true)
    clearError()
    
    const result = await AuthService.loginWithEmail(data)
    
    if (result.success) {
      setUser(result.data)
      return { success: true }
    } else {
      setError(result.error!)
      setLoading(false)
      return { success: false, error: result.error }
    }
  }

  // Login com Google
  const loginWithGoogle = async () => {
    setLoading(true)
    clearError()
    
    const result = await AuthService.loginWithGoogle()
    
    if (result.success) {
      setUser(result.data)
      return { success: true }
    } else {
      setError(result.error!)
      setLoading(false)
      return { success: false, error: result.error }
    }
  }

  // Registro
  const register = async (data: RegisterData) => {
    setLoading(true)
    clearError()
    
    const result = await AuthService.register(data)
    
    if (result.success) {
      setUser(result.data)
      return { success: true }
    } else {
      setError(result.error!)
      setLoading(false)
      return { success: false, error: result.error }
    }
  }

  // Logout
  const logout = async () => {
    setLoading(true)
    
    const result = await AuthService.logout()
    
    if (result.success) {
      setUser(null)
    } else {
      setError(result.error!)
      setLoading(false)
    }
    
    return result
  }

  // Atualizar perfil
  const updateProfile = async (profileData: any) => {
    if (!authState.user) return { success: false, error: 'Usuário não autenticado' }
    
    setLoading(true)
    clearError()
    
    const result = await AuthService.updateUserProfile(authState.user.uid, profileData)
    
    if (result.success) {
      // Atualizar o usuário local
      authState.user.profile = { ...authState.user.profile, ...profileData }
      authState.user.updatedAt = new Date()
    } else {
      setError(result.error!)
    }
    
    setLoading(false)
    return result
  }

  // Inicializar observador de autenticação
  const initAuth = () => {
    return AuthService.onAuthStateChange((user) => {
      setUser(user)
    })
  }

  return {
    // Estado
    user: currentUser,
    isAuthenticated,
    isAdmin,
    isTeacher,
    isLoading,
    error,
    
    // Ações
    login,
    loginWithGoogle,
    register,
    logout,
    updateProfile,
    initAuth,
    setError,
    clearError
  }
}

