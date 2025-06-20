<template>
  <div id="app">
    <!-- Loading screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="logo gradient-bg animate-pulse">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
          </svg>
        </div>
        <h1 class="gradient-text">Social Teachers</h1>
        <div class="spinner"></div>
        <p>Carregando...</p>
      </div>
    </div>
    
    <!-- Main app -->
    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuth } from '@/modules/auth/useAuth'

const { isLoading, initAuth } = useAuth()

// Inicializar autenticação quando o app carrega
onMounted(() => {
  initAuth()
})
</script>

<style>
#app {
  min-height: 100vh;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-content .logo {
  width: 80px;
  height: 80px;
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content .logo svg {
  width: 40px;
  height: 40px;
}

.loading-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
}

.loading-content p {
  color: var(--gray-400);
  margin: 0;
  font-size: 1rem;
}
</style>

