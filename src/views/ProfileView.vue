<template>
  <div class="min-h-screen bg-gray-50">
    <div v-if="isLoading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p class="text-gray-600">Carregando perfil...</p>
      </div>
    </div>

    <div v-else-if="userProfile" class="max-w-4xl mx-auto p-4 py-8">
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-3xl font-bold text-gray-900">Meu Perfil</h1>
          <button
            @click="handleLogout"
            class="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            Sair
          </button>
        </div>

        <div class="flex items-center space-x-6 mb-8">
          <div class="flex-shrink-0">
            <img
              :src="userProfile.photoURL || 'https://via.placeholder.com/96/F8F8F8/808080?text=No+Photo'"
              :alt="userProfile.displayName"
              class="w-24 h-24 rounded-full border-4 border-blue-100"
            />
          </div>

          <div class="flex-1">
            <h2 class="text-2xl font-semibold text-gray-900 mb-2">
              {{ userProfile.displayName }}
            </h2>
            <p class="text-gray-600 mb-2">{{ userProfile.email }}</p>
            <div class="flex items-center space-x-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {{ userProfile.userType === 'professor' ? 'Professor' : 'Administrador' }}
              </span>
              <span class="text-sm text-gray-500">
                Membro desde {{ formatDate(userProfile.createdAt) }}
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Biografia</label>
            <textarea
              v-if="isEditing"
              v-model="editableProfile.bio"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Conte um pouco sobre você..."
            ></textarea>
            <p v-else class="text-gray-800 bg-gray-50 p-3 rounded-lg">
              {{ userProfile.bio || 'Nenhuma biografia adicionada.' }}
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Departamento</label>
            <input
              v-if="isEditing"
              v-model="editableProfile.department"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu departamento"
            />
            <p v-else class="text-gray-800 bg-gray-50 p-3 rounded-lg">
              {{ userProfile.department || 'Não especificado.' }}
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Disciplinas</label>
            <input
              v-if="isEditing"
              v-model="subjectsInput"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Matemática, Física (separadas por vírgula)"
            />
            <p v-else class="text-gray-800 bg-gray-50 p-3 rounded-lg">
              {{ userProfile.subjects && userProfile.subjects.length > 0 ? userProfile.subjects.join(', ') : 'Nenhuma disciplina adicionada.' }}
            </p>
          </div>
        </div>

        <div class="mt-8 flex justify-end space-x-4">
          <button
            v-if="!isEditing"
            @click="startEditing"
            class="btn-primary"
          >
            Editar Perfil
          </button>
          <button
            v-if="isEditing"
            @click="saveProfile"
            :disabled="isSaving"
            class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            {{ isSaving ? 'Salvando...' : 'Salvar Alterações' }}
          </button>
          <button
            v-if="isEditing"
            @click="cancelEditing"
            class="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg transition-colors duration-200"
          >
            Cancelar
          </button>
        </div>

        <div v-if="saveMessage" class="mt-6 p-4 rounded-xl" :class="saveMessage.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="text-sm font-medium" :class="saveMessage.type === 'success' ? 'text-green-700' : 'text-red-700'">
            {{ saveMessage.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/services/firebase'
import type { UserProfile } from '@/types/auth.types'

const router = useRouter()
const { userProfile, isLoading, logout } = useAuth()

const isEditing = ref(false)
const editableProfile = ref<Partial<UserProfile>>({})
const subjectsInput = ref('')
const isSaving = ref(false)
const saveMessage = ref<{type: 'success' | 'error', text: string} | null>(null)

watch(userProfile, (newProfile) => {
  if (newProfile) {
    editableProfile.value = { ...newProfile }
    subjectsInput.value = newProfile.subjects ? newProfile.subjects.join(', ') : ''
  }
}, { immediate: true })

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const startEditing = () => {
  isEditing.value = true
  saveMessage.value = null
}

const cancelEditing = () => {
  isEditing.value = false
  if (userProfile.value) {
    editableProfile.value = { ...userProfile.value }
    subjectsInput.value = userProfile.value.subjects ? userProfile.value.subjects.join(', ') : ''
  }
  saveMessage.value = null
}

const saveProfile = async () => {
  if (!userProfile.value || isSaving.value) return

  isSaving.value = true
  saveMessage.value = null

  try {
    const subjects = subjectsInput.value
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)

    // Continuando exatamente de onde parou:
    const profileRef = doc(db, 'profiles', userProfile.value.uid)
    await updateDoc(profileRef, {
      bio: editableProfile.value.bio || '',
      department: editableProfile.value.department || '',
      subjects: subjects
    })

    // Atualizar o perfil local após salvamento bem-sucedido no Firestore
    if (userProfile.value) {
      userProfile.value.bio = editableProfile.value.bio || ''
      userProfile.value.department = editableProfile.value.department || ''
      userProfile.value.subjects = subjects
    }

    // Feedback positivo para o usuário
    saveMessage.value = { 
      type: 'success', 
      text: 'Perfil atualizado com sucesso!' 
    }
    isEditing.value = false

    // Limpar mensagem após 3 segundos
    setTimeout(() => {
      saveMessage.value = null
    }, 3000)

  } catch (error: any) {
    console.error('Erro ao salvar perfil:', error)
    saveMessage.value = { 
      type: 'error', 
      text: `Erro ao salvar perfil: ${error.message}` 
    }
  } finally {
    isSaving.value = false
  }
}

const handleLogout = async () => {
  try {
    await logout()
    router.push('/') // Redirecionamento para tela de login
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
  }
}
</script>
