<template>
  <div class="profile-container">
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
          
          <h1 class="gradient-text">Meu Perfil</h1>
          
          <button 
            @click="toggleEditMode" 
            class="btn"
            :class="isEditing ? 'btn-secondary' : 'btn-primary'"
          >
            <svg v-if="!isEditing" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
            </svg>
            <svg v-else viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            {{ isEditing ? 'Cancelar' : 'Editar' }}
          </button>
        </div>
      </div>
    </header>
    
    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <div class="profile-layout">
          <!-- Profile Card -->
          <div class="profile-card card animate-fade-in">
            <!-- Avatar Section -->
            <div class="avatar-section">
              <div class="avatar-container">
                <img 
                  :src="profileData.avatar || user?.photoURL || '/default-avatar.png'" 
                  :alt="profileData.name"
                  class="avatar"
                />
                <button 
                  v-if="isEditing" 
                  @click="triggerFileUpload"
                  class="avatar-edit-btn btn btn-primary"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                  </svg>
                </button>
                <input 
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  @change="handleAvatarUpload"
                  class="hidden"
                />
              </div>
              
              <div class="user-info">
                <h2 v-if="!isEditing" class="user-name">{{ profileData.name || user?.displayName }}</h2>
                <input 
                  v-else
                  v-model="profileData.name"
                  type="text"
                  class="input user-name-input"
                  placeholder="Seu nome"
                />
                
                <p class="user-email">{{ user?.email }}</p>
                <div class="user-badges">
                  <span class="badge" :class="user?.userType === 'admin' ? 'badge-admin' : 'badge-teacher'">
                    {{ user?.userType === 'admin' ? 'Administrador' : 'Professor' }}
                  </span>
                  <span v-if="profileData.network" class="badge badge-network">
                    {{ getNetworkLabel(profileData.network) }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Profile Form -->
            <form v-if="isEditing" @submit.prevent="handleSaveProfile" class="profile-form space-y-6">
              <div class="form-section">
                <h3>Informações Profissionais</h3>
                
                <div class="input-group">
                  <label for="area">Área de atuação</label>
                  <input
                    id="area"
                    v-model="profileData.area"
                    type="text"
                    class="input"
                    placeholder="Ex: Matemática, História, Português..."
                  />
                </div>
                
                <div class="input-group">
                  <label for="network">Rede de ensino</label>
                  <select
                    id="network"
                    v-model="profileData.network"
                    class="input"
                  >
                    <option value="">Selecione...</option>
                    <option value="municipal">Municipal</option>
                    <option value="estadual">Estadual</option>
                    <option value="federal">Federal</option>
                    <option value="privada">Privada</option>
                  </select>
                </div>
                
                <div class="input-group">
                  <label for="bio">Biografia</label>
                  <textarea
                    id="bio"
                    v-model="profileData.bio"
                    class="input textarea"
                    rows="4"
                    placeholder="Conte um pouco sobre você e sua experiência como educador..."
                  ></textarea>
                </div>
              </div>
              
              <div class="form-section">
                <h3>Informações de Contato</h3>
                
                <div class="input-group">
                  <label for="location">Localização</label>
                  <input
                    id="location"
                    v-model="profileData.location"
                    type="text"
                    class="input"
                    placeholder="Cidade, Estado"
                  />
                </div>
                
                <div class="input-group">
                  <label for="website">Website</label>
                  <input
                    id="website"
                    v-model="profileData.website"
                    type="url"
                    class="input"
                    placeholder="https://seusite.com"
                  />
                </div>
              </div>
              
              <div class="form-section">
                <h3>Redes Sociais</h3>
                
                <div class="social-inputs">
                  <div class="input-group">
                    <label for="twitter">Twitter</label>
                    <input
                      id="twitter"
                      v-model="profileData.socialLinks.twitter"
                      type="text"
                      class="input"
                      placeholder="@seuusuario"
                    />
                  </div>
                  
                  <div class="input-group">
                    <label for="instagram">Instagram</label>
                    <input
                      id="instagram"
                      v-model="profileData.socialLinks.instagram"
                      type="text"
                      class="input"
                      placeholder="@seuusuario"
                    />
                  </div>
                  
                  <div class="input-group">
                    <label for="linkedin">LinkedIn</label>
                    <input
                      id="linkedin"
                      v-model="profileData.socialLinks.linkedin"
                      type="text"
                      class="input"
                      placeholder="linkedin.com/in/seuusuario"
                    />
                  </div>
                </div>
              </div>
              
              <div class="form-actions">
                <button type="submit" class="btn btn-primary" :disabled="isLoading">
                  <div v-if="isLoading" class="spinner"></div>
                  <span v-else>Salvar Alterações</span>
                </button>
                <button type="button" @click="cancelEdit" class="btn btn-secondary">
                  Cancelar
                </button>
              </div>
            </form>
            
            <!-- Profile Display -->
            <div v-else class="profile-display space-y-6">
              <div v-if="profileData.bio" class="bio-section">
                <h3>Sobre</h3>
                <p>{{ profileData.bio }}</p>
              </div>
              
              <div class="info-grid">
                <div v-if="profileData.area" class="info-item">
                  <h4>Área de atuação</h4>
                  <p>{{ profileData.area }}</p>
                </div>
                
                <div v-if="profileData.location" class="info-item">
                  <h4>Localização</h4>
                  <p>{{ profileData.location }}</p>
                </div>
                
                <div v-if="profileData.website" class="info-item">
                  <h4>Website</h4>
                  <a :href="profileData.website" target="_blank" class="link">
                    {{ profileData.website }}
                  </a>
                </div>
              </div>
              
              <div v-if="hasSocialLinks" class="social-links">
                <h3>Redes Sociais</h3>
                <div class="social-buttons">
                  <a 
                    v-if="profileData.socialLinks.twitter"
                    :href="`https://twitter.com/${profileData.socialLinks.twitter.replace('@', '')}`"
                    target="_blank"
                    class="social-btn twitter"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                  
                  <a 
                    v-if="profileData.socialLinks.instagram"
                    :href="`https://instagram.com/${profileData.socialLinks.instagram.replace('@', '')}`"
                    target="_blank"
                    class="social-btn instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                    </svg>
                    Instagram
                  </a>
                  
                  <a 
                    v-if="profileData.socialLinks.linkedin"
                    :href="profileData.socialLinks.linkedin.startsWith('http') ? profileData.socialLinks.linkedin : `https://${profileData.socialLinks.linkedin}`"
                    target="_blank"
                    class="social-btn linkedin"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Stats Card -->
          <div class="stats-card card animate-slide-in-right">
            <h3>Estatísticas</h3>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number gradient-text">0</div>
                <div class="stat-label">Posts</div>
              </div>
              <div class="stat-item">
                <div class="stat-number gradient-text">0</div>
                <div class="stat-label">Seguidores</div>
              </div>
              <div class="stat-item">
                <div class="stat-number gradient-text">0</div>
                <div class="stat-label">Seguindo</div>
              </div>
            </div>
            
            <div class="join-date">
              <p>Membro desde {{ formatDate(user?.createdAt) }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useAuth } from '@/modules/auth/useAuth'
import type { UserProfile } from '@/types'

const { user, updateProfile, isLoading } = useAuth()

// Estado do componente
const isEditing = ref(false)
const fileInput = ref<HTMLInputElement>()

// Dados do perfil
const profileData = reactive<UserProfile>({
  name: '',
  area: '',
  network: 'municipal',
  bio: '',
  avatar: '',
  location: '',
  website: '',
  socialLinks: {
    twitter: '',
    instagram: '',
    linkedin: ''
  }
})

// Dados originais para cancelar edição
let originalData: UserProfile

// Computed properties
const hasSocialLinks = computed(() => {
  return profileData.socialLinks?.twitter || 
         profileData.socialLinks?.instagram || 
         profileData.socialLinks?.linkedin
})

// Métodos
const loadProfileData = () => {
  if (user.value?.profile) {
    Object.assign(profileData, user.value.profile)
    // Garantir que socialLinks existe
    if (!profileData.socialLinks) {
      profileData.socialLinks = {
        twitter: '',
        instagram: '',
        linkedin: ''
      }
    }
  }
  if (user.value?.displayName && !profileData.name) {
    profileData.name = user.value.displayName
  }
  originalData = { ...profileData, socialLinks: { ...profileData.socialLinks } }
}

const toggleEditMode = () => {
  if (isEditing.value) {
    cancelEdit()
  } else {
    isEditing.value = true
  }
}

const cancelEdit = () => {
  Object.assign(profileData, originalData)
  profileData.socialLinks = { ...originalData.socialLinks }
  isEditing.value = false
}

const handleSaveProfile = async () => {
  const result = await updateProfile(profileData)
  
  if (result.success) {
    isEditing.value = false
    originalData = { ...profileData, socialLinks: { ...profileData.socialLinks } }
    // Aqui você pode adicionar uma notificação de sucesso
  } else {
    // Aqui você pode adicionar uma notificação de erro
    console.error('Erro ao salvar perfil:', result.error)
  }
}

const triggerFileUpload = () => {
  fileInput.value?.click()
}

const handleAvatarUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    // Aqui você implementaria o upload para o Firebase Storage
    // Por enquanto, vamos apenas criar uma URL local
    const reader = new FileReader()
    reader.onload = (e) => {
      profileData.avatar = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const getNetworkLabel = (network: string) => {
  const labels = {
    municipal: 'Municipal',
    estadual: 'Estadual',
    federal: 'Federal',
    privada: 'Privada'
  }
  return labels[network as keyof typeof labels] || network
}

const formatDate = (date: Date | undefined) => {
  if (!date) return 'Data não disponível'
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long'
  }).format(date)
}

// Lifecycle
onMounted(() => {
  loadProfileData()
})
</script>

<style scoped>
.profile-container {
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

.main-content {
  padding: 3rem 0;
}

.profile-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .profile-layout {
    grid-template-columns: 1fr;
  }
}

.profile-card {
  padding: 2rem;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--gray-800);
}

.avatar-container {
  position: relative;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary-purple);
}

.avatar-edit-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hidden {
  display: none;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--white);
}

.user-name-input {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: transparent;
  border: 2px solid var(--primary-purple);
}

.user-email {
  color: var(--gray-400);
  margin: 0 0 1rem 0;
}

.user-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.25rem 0.75rem;
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

.badge-network {
  background: rgba(139, 92, 246, 0.2);
  color: var(--primary-purple-light);
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray-800);
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-purple-light);
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  color: var(--gray-200);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.textarea {
  resize: vertical;
  min-height: 100px;
}

.social-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
}

.bio-section {
  margin-bottom: 2rem;
}

.bio-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 0.75rem;
}

.bio-section p {
  color: var(--gray-300);
  line-height: 1.6;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray-400);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.info-item p {
  color: var(--white);
  font-weight: 500;
}

.social-links h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 1rem;
}

.social-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}

.social-btn.twitter {
  background: rgba(29, 161, 242, 0.1);
  color: #1DA1F2;
  border: 1px solid rgba(29, 161, 242, 0.3);
}

.social-btn.instagram {
  background: rgba(225, 48, 108, 0.1);
  color: #E1306C;
  border: 1px solid rgba(225, 48, 108, 0.3);
}

.social-btn.linkedin {
  background: rgba(0, 119, 181, 0.1);
  color: #0077B5;
  border: 1px solid rgba(0, 119, 181, 0.3);
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.stats-card {
  padding: 2rem;
  height: fit-content;
}

.stats-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--gray-400);
  text-transform: uppercase;
  font-weight: 600;
}

.join-date {
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-800);
  text-align: center;
}

.join-date p {
  color: var(--gray-400);
  font-size: 0.875rem;
  margin: 0;
}

.link {
  color: var(--primary-purple);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-normal);
}

.link:hover {
  color: var(--primary-purple-light);
}
</style>

