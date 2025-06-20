<template>
  <div>
    <!-- Navegação superior -->
    <nav class="social-nav" style="background: white; border-bottom: 1px solid var(--gray-200); padding: 1rem 0; position: sticky; top: 0; z-index: 100; box-shadow: var(--shadow-sm);">
      <div style="max-width: 800px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 0 1rem;">
        <div style="display: flex; align-items: center; gap: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary-600);">
            EduPWA
          </h2>
          <nav style="display: flex; gap: 1.5rem;">
            <router-link to="/social" class="nav-link active">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
              </svg>
              Feed
            </router-link>
            <router-link to="/profile" class="nav-link">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
              Perfil
            </router-link>
          </nav>
        </div>

        <div style="display: flex; align-items: center; gap: 1rem;">
          <img
            v-if="userProfile"
            :src="userProfile.photoURL || 'https://via.placeholder.com/32/F8F8F8/808080?text=👤'"
            :alt="userProfile.displayName"
            style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--primary-200);"
          />
          <span v-if="userProfile" style="font-weight: 500; color: var(--gray-700); display: none; sm:block;">
            {{ userProfile.displayName }}
          </span>
        </div>
      </div>
    </nav>

    <!-- Conteúdo principal -->
    <SocialFeed />
  </div>
</template>

<script setup lang="ts">
import SocialFeed from '../components/SocialFeed.vue'
import { useAuth } from '../../../composables/useAuth'

const { userProfile } = useAuth()
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--gray-600);
  font-weight: 500;
  transition: all var(--transition-normal);
}

.nav-link:hover {
  background: var(--gray-100);
  color: var(--gray-900);
}

.nav-link.active {
  background: var(--primary-100);
  color: var(--primary-700);
}

@media (max-width: 640px) {
  .social-nav > div {
    flex-direction: column;
    gap: 1rem;
  }
  
  .social-nav nav {
    order: -1;
  }
}
</style>
