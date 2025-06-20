// src/modules/social/services/socialService.ts
import { 
  collection, 
  addDoc, 
  orderBy, 
  query, 
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  increment
} from 'firebase/firestore'
import { db } from '../../../services/firebase'
import type { EducationalPost } from '../types/social.types'

const postsCollection = collection(db, 'posts')

export const socialService = {
  // Criar novo post
  async createPost(postData: {
    authorId: string
    authorName: string
    authorPhoto: string | null
    authorDepartment?: string
    content: string
    postType: string
    subjects?: string[]
    hashtags?: string[]
  }) {
    try {
      const docRef = await addDoc(postsCollection, {
        ...postData,
        inspirations: [],
        inspirationsCount: 0,
        commentsCount: 0,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isVisible: true
      })
      return docRef.id
    } catch (error) {
      console.error('Erro ao criar post:', error)
      throw error
    }
  },

  // Buscar posts em tempo real
  subscribeToPosts(callback: (posts: EducationalPost[]) => void) {
    const q = query(postsCollection, orderBy('createdAt', 'desc'))
    
    return onSnapshot(q, (snapshot) => {
      const posts: EducationalPost[] = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        posts.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date(),
        } as EducationalPost)
      })
      callback(posts)
    })
  },

  // Toggle inspiração (curtida)
  async toggleInspiration(postId: string, userId: string, isInspired: boolean) {
    try {
      const postRef = doc(db, 'posts', postId)
      
      if (isInspired) {
        // Remover inspiração
        await updateDoc(postRef, {
          inspirations: arrayRemove(userId),
          inspirationsCount: increment(-1)
        })
      } else {
        // Adicionar inspiração
        await updateDoc(postRef, {
          inspirations: arrayUnion(userId),
          inspirationsCount: increment(1)
        })
      }
    } catch (error) {
      console.error('Erro ao alterar inspiração:', error)
      throw error
    }
  }
}
