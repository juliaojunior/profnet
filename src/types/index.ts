// Tipos de usuário
export interface User {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  userType: 'teacher' | 'admin'
  profile?: UserProfile
  createdAt: Date
  updatedAt: Date
}

// Perfil do usuário
export interface UserProfile {
  name: string
  area: string
  network: 'municipal' | 'estadual' | 'federal' | 'privada'
  bio?: string
  avatar?: string
  location?: string
  website?: string
  socialLinks?: {
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

// Estado de autenticação
export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

// Dados de login
export interface LoginData {
  email: string
  password: string
}

// Dados de registro
export interface RegisterData {
  email: string
  password: string
  confirmPassword: string
  name: string
  area: string
  network: 'municipal' | 'estadual' | 'federal' | 'privada'
  userType: 'teacher' | 'admin'
}

// Resposta da API
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Configurações da aplicação
export interface AppConfig {
  appName: string
  version: string
  environment: 'development' | 'production'
  firebase: {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
  }
}

// Rotas da aplicação
export interface RouteConfig {
  path: string
  name: string
  component: any
  meta?: {
    requiresAuth?: boolean
    requiresAdmin?: boolean
    title?: string
    description?: string
  }
}

