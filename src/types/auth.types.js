// src/types/auth.types.ts
export interface UserProfile {
  uid: string
  email: string
  displayName: string
  photoURL: string | null
  userType: 'professor' | 'admin'
  createdAt: Date
  lastLogin: Date
  bio?: string
  department?: string
  subjects?: string[]
}

export interface AuthState {
  user: any | null
  userProfile: UserProfile | null
  isLoading: boolean
  error: string | null
}
