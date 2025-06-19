<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import type { UserProfile } from '../types/auth.types'

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

    const profileRef = doc(db, 'profiles', userProfile.value.uid)
    await updateDoc(profileRef, {
      bio: editableProfile.value.bio || '',
      department: editableProfile.value.department || '',
      subjects: subjects
    })

    if (userProfile.value) {
      userProfile.value.bio = editableProfile.value.bio || ''
      userProfile.value.department = editableProfile.value.department || ''
      userProfile.value.subjects = subjects
    }

    saveMessage.value = { 
      type: 'success', 
      text: 'Perfil atualizado com sucesso!' 
    }
    isEditing.value = false

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
    router.push('/')
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
  }
}
</script>
