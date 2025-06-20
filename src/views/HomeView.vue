<template>
  <div class="home-container">
    <!-- Header -->
    <header class="header glass-effect">
      <div class="container">
        <div class="header-content">
          <div class="logo-section">
            <div class="logo gradient-bg">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
              </svg>
            </div>
            <h1 class="gradient-text">Social Teachers</h1>
          </div>
          
          <nav class="navigation">
            <router-link to="/" class="nav-link active">Início</router-link>
            <router-link to="/profile" class="nav-link">Perfil</router-link>
            <router-link v-if="isAdmin" to="/admin" class="nav-link">Admin</router-link>
          </nav>
          
          <div class="user-section">
            <div class="user-info">
              <img 
                :src="user?.photoURL || '/default-avatar.png'" 
                :alt="user?.displayName"
                class="avatar"
              />
              <span class="user-name">{{ user?.displayName || 'Usuário' }}</span>
            </div>
            <button @click="handleLogout" class="btn btn-ghost">
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
              </svg>
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <!-- Welcome Section -->
        <section class="welcome-section animate-fade-in">
          <div class="welcome-card card-glass">
            <h2>Bem-vindo, {{ user?.displayName }}! 👋</h2>
            <p>Esta é a primeira versão da rede social para professores. Explore as funcionalidades disponíveis:</p>
            
            <div class="features-grid">
              <div class="feature-card card hover-lift">
                <div class="feature-icon gradient-bg">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3>Perfil</h3>
                <p>Gerencie suas informações pessoais e profissionais</p>
                <router-link to="/profile" class="btn btn-primary">
                  Acessar Perfil
                </router-link>
              </div>
              
              <div v-if="isAdmin" class="feature-card card hover-lift">
                <div class="feature-icon gradient-bg">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3>Dashboard Admin</h3>
                <p>Acesse o painel administrativo da plataforma</p>
                <router-link to="/admin" class="btn btn-primary">
                  Acessar Dashboard
                </router-link>
              </div>
              
              <div class="feature-card card hover-lift">
                <div class="feature-icon gradient-bg">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3>Em breve</h3>
                <p>Funcionalidades como feed, mensagens e criação de conteúdo</p>
                <button class="btn btn-secondary" disabled>
                  Aguarde...
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Status Section -->
        <section class="status-section animate-slide-in-left">
          <div class="status-card card">
            <h3>Status do Projeto</h3>
            <div class="status-list">
              <div class="status-item completed">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Autenticação Firebase</span>
              </div>
              <div class="status-item completed">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Login e Cadastro</span>
              </div>
              <div class="status-item in-progress">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span>Perfil do Usuário</span>
              </div>
              <div class="status-item pending">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>Feed estilo Twitter</span>
              </div>
              <div class="status-item pending">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>Criação de Conteúdo</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/modules/auth/useAuth'

const router = useRouter()
const { user, isAdmin, logout } = useAuth()

const handleLogout = async () => {
  const result = await logout()
  if (result.success) {
    router.push('/login')
  }
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: var(--gradient-dark);
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
  border-bottom: 1px solid var(--gray-800);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo svg {
  width: 24px;
  height: 24px;
}

.logo-section h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.navigation {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--gray-300);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-normal);
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-purple);
  background: rgba(139, 92, 246, 0.1);
}

.user-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary-purple);
}

.user-name {
  font-weight: 600;
  color: var(--white);
}

.main-content {
  padding: 3rem 0;
}

.welcome-section {
  margin-bottom: 3rem;
}

.welcome-card {
  padding: 3rem;
  text-align: center;
}

.welcome-card h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-card p {
  font-size: 1.125rem;
  color: var(--gray-300);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.feature-icon svg {
  width: 30px;
  height: 30px;
  color: white;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--white);
}

.feature-card p {
  color: var(--gray-400);
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.status-section {
  max-width: 600px;
}

.status-card {
  padding: 2rem;
}

.status-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--white);
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-normal);
}

.status-item svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.status-item.completed {
  background: rgba(34, 197, 94, 0.1);
  color: #4ADE80;
}

.status-item.in-progress {
  background: rgba(251, 191, 36, 0.1);
  color: #FBBF24;
}

.status-item.pending {
  background: rgba(107, 114, 128, 0.1);
  color: var(--gray-400);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navigation {
    order: 3;
    width: 100%;
    justify-content: center;
  }
  
  .user-section {
    order: 2;
  }
  
  .welcome-card {
    padding: 2rem 1rem;
  }
  
  .welcome-card h2 {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

