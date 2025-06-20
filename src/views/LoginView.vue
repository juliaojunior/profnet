<template>
  <div class="login-container">
    <!-- Background com gradiente animado -->
    <div class="background-gradient"></div>
    
    <!-- Partículas flutuantes -->
    <div class="floating-particles">
      <div v-for="i in 6" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>
    
    <!-- Container principal -->
    <div class="login-wrapper">
      <!-- Logo e título -->
      <div class="header animate-fade-in">
        <div class="logo-container">
          <div class="logo gradient-bg">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
            </svg>
          </div>
          <h1 class="gradient-text">Social Teachers</h1>
        </div>
        <p class="subtitle">Conecte-se com educadores de todo o país</p>
      </div>
      
      <!-- Formulário de login -->
      <div class="login-form-container animate-slide-in-left">
        <div class="form-card glass-effect">
          <h2>Entrar na sua conta</h2>
          
          <!-- Mensagem de erro -->
          <div v-if="error" class="error-message animate-fade-in">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {{ error }}
          </div>
          
          <!-- Formulário -->
          <form @submit.prevent="handleLogin" class="space-y-6">
            <div class="input-group">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="loginData.email"
                type="email"
                required
                class="input transition-all"
                placeholder="seu@email.com"
                :disabled="isLoading"
              />
            </div>
            
            <div class="input-group">
              <label for="password">Senha</label>
              <div class="password-input">
                <input
                  id="password"
                  v-model="loginData.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="input transition-all"
                  placeholder="••••••••"
                  :disabled="isLoading"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="password-toggle"
                  :disabled="isLoading"
                >
                  <svg v-if="showPassword" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                  <svg v-else viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              class="btn btn-primary w-full hover-lift"
              :disabled="isLoading"
            >
              <div v-if="isLoading" class="spinner"></div>
              <span v-else>Entrar</span>
            </button>
          </form>
          
          <!-- Divisor -->
          <div class="divider">
            <span>ou</span>
          </div>
          
          <!-- Login social -->
          <div class="social-login space-y-4">
            <button
              @click="handleGoogleLogin"
              class="btn btn-secondary w-full hover-lift"
              :disabled="isLoading"
            >
              <svg viewBox="0 0 24 24" class="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </button>
          </div>
          
          <!-- Link para cadastro -->
          <div class="register-link">
            <p>
              Não tem uma conta?
              <router-link to="/register" class="link">
                Cadastre-se aqui
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/modules/auth/useAuth'
import type { LoginData } from '@/types'

const router = useRouter()
const { login, loginWithGoogle, error, isLoading, clearError } = useAuth()

// Estado do formulário
const loginData = reactive<LoginData>({
  email: '',
  password: ''
})

const showPassword = ref(false)

// Manipuladores de eventos
const handleLogin = async () => {
  clearError()
  const result = await login(loginData)
  
  if (result.success) {
    router.push('/')
  }
}

const handleGoogleLogin = async () => {
  clearError()
  const result = await loginWithGoogle()
  
  if (result.success) {
    router.push('/')
  }
}

// Estilo das partículas flutuantes
const getParticleStyle = (index: number) => {
  const positions = [
    { top: '10%', left: '10%', animationDelay: '0s' },
    { top: '20%', right: '15%', animationDelay: '2s' },
    { top: '60%', left: '5%', animationDelay: '4s' },
    { bottom: '20%', right: '10%', animationDelay: '1s' },
    { bottom: '10%', left: '20%', animationDelay: '3s' },
    { top: '40%', right: '5%', animationDelay: '5s' }
  ]
  
  return positions[index - 1]
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.background-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-purple-dark);
  z-index: -2;
}

.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-purple-light);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  opacity: 0.6;
}

.login-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 768px) {
  .login-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 400px;
  }
}

.header {
  text-align: center;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.logo {
  width: 80px;
  height: 80px;
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: glow 2s ease-in-out infinite;
}

.logo svg {
  width: 40px;
  height: 40px;
}

.header h1 {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--gray-300);
  margin: 0;
}

.login-form-container {
  display: flex;
  justify-content: center;
}

.form-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: var(--border-radius-xl);
}

.form-card h2 {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--white);
}

.error-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--border-radius-md);
  color: #FCA5A5;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.error-message svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-weight: 600;
  color: var(--gray-200);
  font-size: 0.875rem;
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--gray-400);
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  transition: color var(--transition-normal);
}

.password-toggle:hover {
  color: var(--primary-purple);
}

.password-toggle svg {
  width: 100%;
  height: 100%;
}

.w-full {
  width: 100%;
}

.divider {
  position: relative;
  text-align: center;
  margin: 2rem 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gray-700);
}

.divider span {
  background: var(--gray-900);
  padding: 0 1rem;
  color: var(--gray-400);
  font-size: 0.875rem;
  position: relative;
  z-index: 1;
}

.social-login button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.register-link {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--gray-800);
}

.register-link p {
  color: var(--gray-400);
  margin: 0;
}

.link {
  color: var(--primary-purple);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-normal);
}

.link:hover {
  color: var(--primary-purple-light);
}
</style>

