<template>
  <div class="social-feed-container">
    <!-- Cabeçalho do Feed -->
    <div style="text-align: center; margin-bottom: 2rem;">
      <h1 class="profile-title" style="margin-bottom: 0.5rem;">
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 20 20" style="margin-right: 0.5rem;">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
        </svg>
        Feed Educacional
      </h1>
      <p style="color: var(--gray-600); font-size: 1.1rem;">
        Compartilhe conhecimento, inspire colegas e transforme a educação
      </p>
    </div>

    <!-- Criador de Posts -->
    <PostCreator />

    <!-- Estado de carregamento -->
    <div v-if="isLoading" class="text-center" style="padding: 3rem 0;">
      <div class="loading-spinner" style="margin: 0 auto 1rem; width: 40px; height: 40px;"></div>
      <p style="color: var(--gray-600); font-size: 1.1rem;">Carregando feed educacional...</p>
    </div>

    <!-- Lista de Posts -->
    <div v-else-if="posts.length > 0" class="posts-list">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>

    <!-- Estado vazio -->
    <div v-else class="empty-state" style="text-align: center; padding: 4rem 2rem; background: white; border-radius: 20px; box-shadow: var(--shadow-lg); margin-top: 2rem;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">📚</div>
      <h3 style="font-size: 1.5rem; font-weight: 600; color: var(--gray-900); margin-bottom: 1rem;">
        Seja o primeiro a compartilhar!
      </h3>
      <p style="color: var(--gray-600); font-size: 1rem; max-width: 400px; margin: 0 auto;">
        Inicie a conversa educacional compartilhando seus insights, experiências ou perguntas pedagógicas.
      </p>
    </div>

    <!-- Mensagem de erro -->
    <div v-if="error" class="alert alert-error" style="margin-top: 2rem;">
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import PostCreator from './PostCreator.vue'
import PostCard from './PostCard.vue'
import { usePosts } from '../composables/usePosts'

const { posts, isLoading, error } = usePosts()
</script>
