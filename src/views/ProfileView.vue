<template>
  <div class="profile-container">
    <!-- Estado de carregamento -->
    <div v-if="isLoading" class="text-center" style="padding: 4rem 0;">
      <div class="loading-spinner" style="margin: 2rem auto;"></div>
      <p style="color: var(--gray-600); font-size: 1.1rem;">Carregando seu perfil...</p>
    </div>

    <!-- Conteúdo principal do perfil -->
    <div v-else-if="userProfile" class="profile-card">
      <!-- Cabeçalho com título e botão de logout -->
      <div class="profile-header">
        <h1 class="profile-title">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
          </svg>
          Meu Perfil
        </h1>
        <button @click="handleLogout" class="btn btn-danger">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
          </svg>
          Sair
        </button>
      </div>

      <!-- Informações do usuário com foto e dados básicos -->
      <div class="profile-user-info">
        <img
          :src="userProfile.photoURL || 'https://via.placeholder.com/96/F8F8F8/808080?text=👤'"
          :alt="userProfile.displayName"
          class="profile-avatar"
          @error="handleImageError"
        />

        <div class="profile-details">
          <h2>{{ userProfile.displayName }}</h2>
          <p style="color: var(--gray-600); font-size: 1rem; margin-bottom: 0.5rem;">
            {{ userProfile.email }}
          </p>
          <div class="profile-badge">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {{ userProfile.userType === 'professor' ? 'Professor' : 'Administrador' }}
          </div>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--gray-500);">
            Membro desde {{ formatDate(userProfile.createdAt) }}
          </p>
        </div>
      </div>

      <!-- Formulário de edição de perfil -->
      <div class="form-section">
        <!-- Campo Biografia -->
        <div class="form-group">
          <label class="form-label">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" style="margin-right: 0.5rem;">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clip-rule="evenodd"/>
            </svg>
            Biografia
          </label>
          <textarea
            v-if="isEditing"
            v-model="editableProfile.bio"
            class="form-textarea"
            placeholder="Conte um pouco sobre você, sua experiência e paixão pela educação..."
            rows="4"
            maxlength="500"
          ></textarea>
          <div v-else class="form-display">
            {{ userProfile.bio || 'Nenhuma biografia adicionada. Clique em "Editar Perfil" para adicionar informações sobre você.' }}
          </div>
        </div>

        <!-- Campo Departamento -->
        <div class="form-group">
          <label class="form-label">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" style="margin-right: 0.5rem;">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clip-rule="evenodd"/>
            </svg>
            Departamento
          </label>
          <input
            v-if="isEditing"
            v-model="editableProfile.department"
            type="text"
            class="form-input"
            placeholder="Ex: Departamento de Matemática, Ciências Humanas..."
            maxlength="100"
          />
          <div v-else class="form-display">
            {{ userProfile.department || 'Departamento não especificado.' }}
          </div>
        </div>

        <!-- Campo Disciplinas -->
        <div class="form-group">
          <label class="form-label">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" style="margin-right: 0.5rem;">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Disciplinas que Leciona
          </label>
          <input
            v-if="isEditing"
            v-model="subjectsInput"
            type="text"
            class="form-input"
            placeholder="Ex: Matemática, Física, Química (separadas por vírgula)"
            maxlength="200"
          />
          <div v-else class="form-display">
            <span v-if="userProfile.subjects && userProfile.subjects.length > 0">
              <span 
                v-for="(subject, index) in userProfile.subjects" 
                :key="index"
                style="display: inline-block; background: var(--primary-100); color: var(--primary-700); padding: 0.25rem 0.5rem; border-radius: 6px; margin: 0.25rem 0.25rem 0.25rem 0; font-size: 0.875rem;"
              >
                {{ subject }}
              </span>
            </span>
            <span v-else>Nenhuma disciplina adicionada.</span>
          </div>
        </div>
      </div>

      <!-- Botões de ação -->
      <div class="btn-group">
        <button
          v-if="!isEditing"
          @click="startEditing"
          class="btn btn-primary"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
          </svg>
          Editar Perfil
        </button>
        
        <button
          v-if="isEditing"
          @click="saveProfile"
          :disabled="isSaving"
          class="btn btn-success"
        >
          <div v-if="isSaving" class="loading-spinner" style="width: 16px; height: 16px; border-color: white; border-top-color: transparent;"></div>
          <svg v-else width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          {{ isSaving ? 'Salvando...' : 'Salvar Alterações' }}
        </button>
        
        <button
          v-if="isEditing"
          @click="cancelEditing"
          class="btn btn-secondary"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
          Cancelar
        </button>
      </div>

      <!-- Mensagens de feedback -->
      <div v-if="saveMessage" :class="['alert', saveMessage.type === 'success' ? 'alert-success' : 'alert-error']">
        <svg v-if="saveMessage.type === 'success'" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <svg v-else width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        {{ saveMessage.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import type { UserProfile } from '../types/auth.types'

// Composables e roteamento
const router = useRouter()
const { userProfile, isLoading, logout, updateUserProfile } = useAuth()

// Estados reativos para controle da interface
const isEditing = ref(false)
const editableProfile = ref<Partial<UserProfile>>({})
const subjectsInput = ref('')
const isSaving = ref(false)
const saveMessage = ref<{type: 'success' | 'error', text: string} | null>(null)

// Observador para sincronizar dados do perfil com o formulário de edição
watch(userProfile, (newProfile) => {
  if (newProfile) {
    // Cria cópia profunda para evitar mutação direta do estado original
    editableProfile.value = JSON.parse(JSON.stringify(newProfile))
    subjectsInput.value = newProfile.subjects ? newProfile.subjects.join(', ') : ''
  }
}, { immediate: true })

// Formatação de data para exibição brasileira
const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Tratamento de erro de imagem (fallback para placeholder)
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'https://via.placeholder.com/96/F8F8F8/808080?text=👤'
}

// Ativa o modo de edição
const startEditing = () => {
  isEditing.value = true
  saveMessage.value = null
}

// Cancela edição e restaura dados originais
const cancelEditing = () => {
  isEditing.value = false
  if (userProfile.value) {
    editableProfile.value = JSON.parse(JSON.stringify(userProfile.value))
    subjectsInput.value = userProfile.value.subjects ? userProfile.value.subjects.join(', ') : ''
  }
  saveMessage.value = null
}

// Salva alterações no perfil
const saveProfile = async () => {
  if (!userProfile.value || isSaving.value) return

  isSaving.value = true
  saveMessage.value = null

  try {
    // Processa disciplinas: divide por vírgula, remove espaços e filtra vazios
    const subjects = subjectsInput.value
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)

    // CHAMA O NOVO MÉTODO DO COMPOSABLE
    await updateUserProfile({
      bio: editableProfile.value.bio?.trim() || '',
      department: editableProfile.value.department?.trim() || '',
      subjects: subjects
    })

    // Referência do documento no Firestore
    const profileRef = doc(db, 'profiles', userProfile.value.uid)
    
    // Atualiza documento no Firestore
    await updateDoc(profileRef, {
      bio: editableProfile.value.bio || '',
      department: editableProfile.value.department || '',
      subjects: subjects
    })

    // Sincroniza estado local após sucesso no Firestore
    if (userProfile.value) {
      userProfile.value.bio = editableProfile.value.bio || ''
      userProfile.value.department = editableProfile.value.department || ''
      userProfile.value.subjects = subjects
    }

    // Feedback de sucesso
    saveMessage.value = { 
      type: 'success', 
      text: 'Perfil atualizado com sucesso! Suas informações foram salvas.' 
    }
    isEditing.value = false

    // Remove mensagem após 4 segundos
    setTimeout(() => {
      saveMessage.value = null
    }, 4000)

  } catch (error: any) {
    console.error('Erro ao salvar perfil:', error)
    saveMessage.value = { 
      type: 'error', 
      text: `Erro ao salvar perfil: ${error.message}. Tente novamente.` 
    }
  } finally {
    isSaving.value = false
  }
}

// Executa logout e redireciona para login
const handleLogout = async () => {
  try {
    await logout()
    router.push('/')
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
    // Força redirecionamento mesmo com erro
    router.push('/')
  }
}
</script>
