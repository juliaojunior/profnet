<template>
  <div :class="['post-card', post.postType]">
    <div class="post-header">
      <img
        :src="post.authorPhoto || 'https://via.placeholder.com/48/F8F8F8/808080?text=👤'"
        :alt="post.authorName"
        class="post-avatar"
      />
      <div class="post-author-info">
        <h4>{{ post.authorName }}</h4>
        <p>{{ post.authorDepartment || 'Educador' }} • {{ formatDate(post.createdAt) }}</p>
      </div>
    </div>

    <div class="post-content">
      {{ post.content }}
    </div>

    <div v-if="post.hashtags && post.hashtags.length > 0" class="post-hashtags">
      <span
        v-for="hashtag in post.hashtags"
        :key="hashtag"
        class="hashtag"
      >
        #{{ hashtag }}
      </span>
    </div>

    <div class="post-interactions">
      <div class="interaction-buttons">
        <button
          @click="handleToggleInspiration"
          :class="['interaction-btn', { active: isInspiredByUser(post) }]"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
          </svg>
          <span>{{ post.inspirationsCount || 0 }}</span>
        </button>

        <button class="interaction-btn">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
          </svg>
          <span>{{ post.commentsCount || 0 }}</span>
        </button>

        <button class="interaction-btn">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
          </svg>
          Compartilhar
        </button>
      </div>

      <div class="post-timestamp">
        {{ formatTimeAgo(post.createdAt) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePosts } from '../composables/usePosts'
import type { EducationalPost } from '../types/social.types'

interface Props {
  post: EducationalPost
}

const props = defineProps<Props>()

const { toggleInspiration, isInspiredByUser } = usePosts()

const handleToggleInspiration = async () => {
  await toggleInspiration(props.post.id)
}

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatTimeAgo = (date: Date): string => {
  const agora = new Date()
  const diferenca = Math.floor((agora.getTime() - date.getTime()) / 1000)

  if (diferenca < 60) return 'agora mesmo'
  if (diferenca < 3600) return `${Math.floor(diferenca / 60)} min atrás`
  if (diferenca < 86400) return `${Math.floor(diferenca / 3600)}h atrás`
  if (diferenca < 604800) return `${Math.floor(diferenca / 86400)}d atrás`
  
  return formatDate(date)
}
</script>
