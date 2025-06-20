import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/modules/auth/useAuth'
import type { RouteConfig } from '@/types'

// Importar componentes (serão criados em seguida)
const LoginView = () => import('@/views/LoginView.vue')
const RegisterView = () => import('@/views/RegisterView.vue')
const ProfileView = () => import('@/views/ProfileView.vue')
const AdminDashboard = () => import('@/views/AdminDashboard.vue')
const HomeView = () => import('@/views/HomeView.vue')

// Configuração das rotas
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true,
      title: 'Início',
      description: 'Página inicial da rede social para professores'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: 'Login',
      description: 'Faça login na sua conta'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      title: 'Cadastro',
      description: 'Crie sua conta de professor'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      requiresAuth: true,
      title: 'Perfil',
      description: 'Gerencie seu perfil'
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboard,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
      title: 'Dashboard Admin',
      description: 'Painel administrativo'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/'
  }
]

// Criar router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Guards de navegação
router.beforeEach(async (to, from, next) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth()
  
  // Aguardar carregamento da autenticação
  if (isLoading.value) {
    // Aguardar um pouco para o estado de autenticação ser resolvido
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  
  // Verificar se a rota requer autenticação
  if (to.meta?.requiresAuth && !isAuthenticated.value) {
    next({ name: 'login', query: { redirect: to.fullPath } })
    return
  }
  
  // Verificar se a rota requer privilégios de admin
  if (to.meta?.requiresAdmin && !isAdmin.value) {
    next({ name: 'home' })
    return
  }
  
  // Redirecionar usuários autenticados das páginas de login/registro
  if ((to.name === 'login' || to.name === 'register') && isAuthenticated.value) {
    next({ name: 'home' })
    return
  }
  
  next()
})

// Atualizar título da página
router.afterEach((to) => {
  const title = to.meta?.title
  if (title) {
    document.title = `${title} - Social Teachers`
  } else {
    document.title = 'Social Teachers'
  }
})

export default router

