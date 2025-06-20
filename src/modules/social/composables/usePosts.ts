// src/modules/social/composables/usePosts.ts
import { ref, onMounted, onUnmounted } from 'vue'
import { socialService } from '../services/socialService'
import { useAuth } from '../../../composables/useAuth'
import type { EducationalPost } from '../types/social.types'

export const usePosts = () => {
  const { userProfile } = useAuth()
  const posts = ref<EducationalPost[]>([])
  const isLoading = ref(true)
  const error = ref<string | null>(null)
  const isCreatingPost = ref(false)

  let unsubscribe: (() => void) | null = null

  // Criar novo post
  const createPost = async (content: string, postType: string = 'insight', hashtags: string[] = []) => {
    if (!userProfile.value || !content.trim()) {
      error.value = 'Dados inválidos para criar post'
      return false
    }

    isCreatingPost.value = true
    error.value = null

    try {
      await socialService.createPost({
        authorId: userProfile.value.uid,
        authorName: userProfile.value.displayName,
        authorPhoto: userProfile.value.photoURL,
        authorDepartment: userProfile.value.department,
        content: content.trim(),
        postType,
        hashtags
      })
      
      return true
    } catch (err: any) {
      error.value = `Erro ao criar post: ${err.message}`
      return false
    } finally {
      isCreatingPost.value = false
    }
  }

  // Toggle inspiração
  const toggleInspiration = async (postId: string) => {
    if (!userProfile.value) return

    const post = posts.value.find(p => p.id === postId)
    if (!post) return

    const isInspired = post.inspirations.includes(userProfile.value.uid)

    try {
      await socialService.toggleInspiration(postId, userProfile.value.uid, isInspired)
    } catch (err: any) {
      error.value = `Erro ao alterar inspiração: ${err.message}`
    }
  }

  // Verificar se usuário inspirou um post
  const isInspiredByUser = (post: EducationalPost): boolean => {
    return userProfile.value ? post.inspirations.includes(userProfile.value.uid) : false
  }

  // Inicializar subscription
  onMounted(() => {
    unsubscribe = socialService.subscribeToPosts((newPosts) => {
      posts.value = newPosts
      isLoading.value = false
    })
  })

  // Limpar subscription
  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe()
    }
  })

  return {
    posts,
    isLoading,
    error,
    isCreatingPost,
    createPost,
    toggleInspiration,
    isInspiredByUser
  }
}
