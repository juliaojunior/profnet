<template>
  <div class="post-creator">
    <div class="post-creator-header">
      <img
        :src="userProfile?.photoURL || 'https://via.placeholder.com/50/F8F8F8/808080?text=👤'"
        :alt="userProfile?.displayName"
        class="post-creator-avatar"
      />
      <div class="post-creator-info">
        <h3>{{ userProfile?.displayName }}</h3>
        <p>{{ userProfile?.department || 'Educador' }}</p>
      </div>
    </div>

    <textarea
      v-model="postContent"
      class="post-textarea"
      placeholder="Compartilhe seus insights educacionais, experiências pedagógicas ou reflexões acadêmicas..."
      maxlength="500"
      @input="extractHashtags"
    ></textarea>

    <div class="post-actions">
      <div class="post-type-selector">
        <button
          v-for="type in postTypes"
          :key="type.value"
          @click="selectedType = type.value"
          :class="['post-type-btn', { active: selectedType === type.value }]"
        >
          <span>{{ type.icon }}</span>
          {{ type.label }}
        </button>
      </div>

      <button
        @click="handleCreatePost"
        :disabled="!canPublish || isCreatingPost"
        class="btn btn-primary"
      >
        <div v-if="isCreatingPost" class="loading-spinner" style="width: 16px; height: 16px; border-color: white; border-top-color: transparent;"></div>
        <svg v-else width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
        </svg>
        {{ isCreatingPost ? 'Publicando...' : 'Publicar' }}
      </button>
    </div>

    <div v-if="hashtags.length > 0" class="post-hashtags" style="margin-top: 1rem;">
      <span
        v-for="hashtag in hashtags"
        :key="hashtag"
        class="hashtag"
      >
        #{{ hashtag }}
      </span>
    </div>

    <div v-if="error" class="alert alert-error" style="margin-top: 1rem;">
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuth } from '../../../composables/useAuth'
import { usePosts } from '../composables/usePosts'

const { userProfile } = useAuth()
const { createPost, isCreatingPost, error } = usePosts()

const postContent = ref('')
const selectedType = ref('insight')
const hashtags = ref<string[]>([])

const postTypes = [
  { value: 'insight', label: 'Insight', icon: '💡' },
  { value: 'question', label: 'Pergunta', icon: '❓' },
  { value: 'resource', label: 'Recurso', icon: '📚' },
  { value: 'reflection', label: 'Reflexão', icon: '🤔' }
]

const canPublish = computed(() => {
  return postContent.value.trim().length >= 10 && postContent.value.trim().length <= 500
})

const extractHashtags = () => {
  const matches = postContent.value.match(/#\w+/g)
  hashtags.value = matches ? matches.map(tag => tag.substring(1)) : []
}

const handleCreatePost = async () => {
  if (!canPublish.value) return

  const success = await createPost(postContent.value, selectedType.value, hashtags.value)
  
  if (success) {
    postContent.value = ''
    hashtags.value = []
    selectedType.value = 'insight'
  }
}
</script>
