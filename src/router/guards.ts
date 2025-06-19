// src/router/guards.ts
import { auth } from '@/services/firebase'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

export const authGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (to.meta.requiresAuth) {
    const user = await getCurrentUser()
    if (user) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    if (to.name === 'login' && await getCurrentUser()) {
      next({ name: 'profile' })
    } else {
      next()
    }
  }
}
