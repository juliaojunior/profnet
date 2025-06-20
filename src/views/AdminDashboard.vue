<template>
  <div class="admin-container">
    <!-- Header -->
    <header class="header glass-effect">
      <div class="container">
        <div class="header-content">
          <router-link to="/" class="back-button btn btn-ghost">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Voltar
          </router-link>
          
          <h1 class="gradient-text">Dashboard Administrativo</h1>
          
          <div class="admin-badge">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.734.99A.996.996 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736L14.984 6l-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 11-2 0v-1.277l-1.246-.855a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.277l1.246.855a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.277V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
            </svg>
            Administrador
          </div>
        </div>
      </div>
    </header>
    
    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <!-- Overview Cards -->
        <section class="overview-section animate-fade-in">
          <div class="overview-grid">
            <div class="metric-card card hover-lift">
              <div class="metric-header">
                <div class="metric-icon users-icon">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div class="metric-info">
                  <h3>Total de Usuários</h3>
                  <div class="metric-value gradient-text">{{ stats.totalUsers }}</div>
                </div>
              </div>
              <div class="metric-change positive">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                +12% este mês
              </div>
            </div>
            
            <div class="metric-card card hover-lift">
              <div class="metric-header">
                <div class="metric-icon teachers-icon">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div class="metric-info">
                  <h3>Professores</h3>
                  <div class="metric-value gradient-text">{{ stats.teachers }}</div>
                </div>
              </div>
              <div class="metric-change positive">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                +8% este mês
              </div>
            </div>
            
            <div class="metric-card card hover-lift">
              <div class="metric-header">
                <div class="metric-icon posts-icon">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z" />
                  </svg>
                </div>
                <div class="metric-info">
                  <h3>Posts Publicados</h3>
                  <div class="metric-value gradient-text">{{ stats.posts }}</div>
                </div>
              </div>
              <div class="metric-change neutral">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                Sem alteração
              </div>
            </div>
            
            <div class="metric-card card hover-lift">
              <div class="metric-header">
                <div class="metric-icon activity-icon">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="metric-info">
                  <h3>Usuários Ativos</h3>
                  <div class="metric-value gradient-text">{{ stats.activeUsers }}</div>
                </div>
              </div>
              <div class="metric-change positive">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                +15% esta semana
              </div>
            </div>
          </div>
        </section>
        
        <!-- Management Sections -->
        <div class="management-layout">
          <!-- User Management -->
          <section class="user-management animate-slide-in-left">
            <div class="section-card card">
              <div class="section-header">
                <h2>Gestão de Usuários</h2>
                <button class="btn btn-primary">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                  Novo Usuário
                </button>
              </div>
              
              <div class="search-bar">
                <input
                  v-model="userSearch"
                  type="text"
                  placeholder="Buscar usuários..."
                  class="input"
                />
                <svg viewBox="0 0 20 20" fill="currentColor" class="search-icon">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              
              <div class="user-list">
                <div v-for="user in filteredUsers" :key="user.id" class="user-item">
                  <div class="user-avatar">
                    <img :src="user.avatar || '/default-avatar.png'" :alt="user.name" />
                  </div>
                  <div class="user-info">
                    <h4>{{ user.name }}</h4>
                    <p>{{ user.email }}</p>
                    <div class="user-meta">
                      <span class="badge" :class="user.type === 'admin' ? 'badge-admin' : 'badge-teacher'">
                        {{ user.type === 'admin' ? 'Admin' : 'Professor' }}
                      </span>
                      <span class="user-status" :class="user.active ? 'active' : 'inactive'">
                        {{ user.active ? 'Ativo' : 'Inativo' }}
                      </span>
                    </div>
                  </div>
                  <div class="user-actions">
                    <button class="action-btn edit" @click="editUser(user)">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                      </svg>
                    </button>
                    <button class="action-btn delete" @click="deleteUser(user)">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- System Status -->
          <section class="system-status animate-slide-in-right">
            <div class="section-card card">
              <div class="section-header">
                <h2>Status do Sistema</h2>
                <div class="status-indicator online">
                  <div class="status-dot"></div>
                  Online
                </div>
              </div>
              
              <div class="status-list">
                <div class="status-item">
                  <div class="status-info">
                    <h4>Servidor</h4>
                    <p>Funcionando normalmente</p>
                  </div>
                  <div class="status-badge success">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-info">
                    <h4>Base de Dados</h4>
                    <p>Conectado - Firebase</p>
                  </div>
                  <div class="status-badge success">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-info">
                    <h4>Autenticação</h4>
                    <p>Firebase Auth ativo</p>
                  </div>
                  <div class="status-badge success">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-info">
                    <h4>Storage</h4>
                    <p>85% utilizado</p>
                  </div>
                  <div class="status-badge warning">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div class="system-actions">
                <button class="btn btn-secondary w-full">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                  </svg>
                  Atualizar Status
                </button>
              </div>
            </div>
          </section>
        </div>
        
        <!-- Recent Activity -->
        <section class="recent-activity animate-fade-in">
          <div class="section-card card">
            <div class="section-header">
              <h2>Atividade Recente</h2>
              <button class="btn btn-ghost">Ver todas</button>
            </div>
            
            <div class="activity-list">
              <div v-for="activity in recentActivities" :key="activity.id" class="activity-item">
                <div class="activity-icon" :class="activity.type">
                  <svg v-if="activity.type === 'user'" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  <svg v-else-if="activity.type === 'post'" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                  </svg>
                  <svg v-else viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="activity-content">
                  <p>{{ activity.description }}</p>
                  <span class="activity-time">{{ formatTime(activity.timestamp) }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

// Estado do componente
const userSearch = ref('')

// Dados mockados (em produção viriam do Firebase)
const stats = reactive({
  totalUsers: 1247,
  teachers: 1156,
  posts: 0,
  activeUsers: 89
})

const users = ref([
  {
    id: 1,
    name: 'Maria Silva',
    email: 'maria@email.com',
    avatar: '/default-avatar.png',
    type: 'teacher',
    active: true
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao@email.com',
    avatar: '/default-avatar.png',
    type: 'admin',
    active: true
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'ana@email.com',
    avatar: '/default-avatar.png',
    type: 'teacher',
    active: false
  }
])

const recentActivities = ref([
  {
    id: 1,
    type: 'user',
    description: 'Novo usuário cadastrado: Maria Silva',
    timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 min atrás
  },
  {
    id: 2,
    type: 'post',
    description: 'Post publicado por João Santos',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2h atrás
  },
  {
    id: 3,
    type: 'system',
    description: 'Sistema atualizado para versão 1.0.1',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 dia atrás
  }
])

// Computed properties
const filteredUsers = computed(() => {
  if (!userSearch.value) return users.value
  
  return users.value.filter(user => 
    user.name.toLowerCase().includes(userSearch.value.toLowerCase()) ||
    user.email.toLowerCase().includes(userSearch.value.toLowerCase())
  )
})

// Métodos
const editUser = (user: any) => {
  console.log('Editar usuário:', user)
  // Implementar modal de edição
}

const deleteUser = (user: any) => {
  console.log('Deletar usuário:', user)
  // Implementar confirmação e exclusão
}

const formatTime = (timestamp: Date) => {
  const now = new Date()
  const diff = now.getTime() - timestamp.getTime()
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (minutes < 60) {
    return `${minutes}m atrás`
  } else if (hours < 24) {
    return `${hours}h atrás`
  } else {
    return `${days}d atrás`
  }
}
</script>

<style scoped>
.admin-container {
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
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
}

.admin-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-full);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}

.main-content {
  padding: 3rem 0;
}

.overview-section {
  margin-bottom: 3rem;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.metric-card {
  padding: 2rem;
}

.metric-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.metric-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.metric-icon svg {
  width: 30px;
  height: 30px;
  color: white;
}

.users-icon {
  background: linear-gradient(135deg, #3B82F6, #1D4ED8);
}

.teachers-icon {
  background: linear-gradient(135deg, #10B981, #047857);
}

.posts-icon {
  background: linear-gradient(135deg, #F59E0B, #D97706);
}

.activity-icon {
  background: linear-gradient(135deg, #EF4444, #DC2626);
}

.metric-info h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray-400);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.metric-value {
  font-size: 2.5rem;
  font-weight: 800;
}

.metric-change {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.metric-change svg {
  width: 16px;
  height: 16px;
}

.metric-change.positive {
  color: #10B981;
}

.metric-change.neutral {
  color: var(--gray-400);
}

.management-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .management-layout {
    grid-template-columns: 1fr;
  }
}

.section-card {
  padding: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  margin: 0;
}

.search-bar {
  position: relative;
  margin-bottom: 2rem;
}

.search-bar input {
  padding-right: 3rem;
}

.search-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--gray-400);
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--gray-800);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-normal);
}

.user-item:hover {
  background: var(--gray-700);
}

.user-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  flex: 1;
}

.user-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  margin: 0 0 0.25rem 0;
}

.user-info p {
  font-size: 0.875rem;
  color: var(--gray-400);
  margin: 0 0 0.5rem 0;
}

.user-meta {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.badge {
  padding: 0.125rem 0.5rem;
  border-radius: var(--border-radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.badge-admin {
  background: var(--gradient-primary);
  color: white;
}

.badge-teacher {
  background: rgba(34, 197, 94, 0.2);
  color: #4ADE80;
}

.user-status {
  font-size: 0.75rem;
  font-weight: 600;
}

.user-status.active {
  color: #10B981;
}

.user-status.inactive {
  color: var(--gray-400);
}

.user-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.action-btn svg {
  width: 16px;
  height: 16px;
}

.action-btn.edit {
  background: rgba(59, 130, 246, 0.2);
  color: #3B82F6;
}

.action-btn.delete {
  background: rgba(239, 68, 68, 0.2);
  color: #EF4444;
}

.action-btn:hover {
  transform: scale(1.1);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.status-indicator.online {
  color: #10B981;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 2s infinite;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.status-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--gray-800);
  border-radius: var(--border-radius-lg);
}

.status-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  margin: 0 0 0.25rem 0;
}

.status-info p {
  font-size: 0.875rem;
  color: var(--gray-400);
  margin: 0;
}

.status-badge {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-badge svg {
  width: 16px;
  height: 16px;
}

.status-badge.success {
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
}

.status-badge.warning {
  background: rgba(245, 158, 11, 0.2);
  color: #F59E0B;
}

.system-actions {
  margin-top: 2rem;
}

.w-full {
  width: 100%;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--gray-800);
  border-radius: var(--border-radius-lg);
}

.activity-item .activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.activity-item .activity-icon svg {
  width: 20px;
  height: 20px;
}

.activity-item .activity-icon.user {
  background: rgba(59, 130, 246, 0.2);
  color: #3B82F6;
}

.activity-item .activity-icon.post {
  background: rgba(245, 158, 11, 0.2);
  color: #F59E0B;
}

.activity-item .activity-icon.system {
  background: rgba(139, 92, 246, 0.2);
  color: var(--primary-purple);
}

.activity-content {
  flex: 1;
}

.activity-content p {
  font-size: 0.875rem;
  color: var(--white);
  margin: 0 0 0.25rem 0;
}

.activity-time {
  font-size: 0.75rem;
  color: var(--gray-400);
}
</style>

