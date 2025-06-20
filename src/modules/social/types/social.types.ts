// src/modules/social/types/social.types.ts
export interface EducationalPost {
  id: string
  authorId: string
  authorName: string
  authorPhoto: string | null
  authorDepartment?: string
  
  // Conteúdo
  content: string
  postType: 'insight' | 'question' | 'resource' | 'reflection'
  
  // Classificação Educacional
  subjects?: string[]
  hashtags?: string[]
  
  // Métricas de Engajamento
  inspirations: string[]        // Array de UIDs que "inspiraram"
  inspirationsCount: number
  commentsCount: number         // Para futuras implementações
  
  // Metadados
  createdAt: Date
  updatedAt: Date
  isVisible: boolean
}

export interface PostInteraction {
  id: string
  postId: string
  userId: string
  userName: string
  type: 'inspiration' | 'comment' | 'share'
  createdAt: Date
  content?: string              // Para comentários futuros
}
