import React, { createContext, ReactNode, useState, useContext } from 'react'

import { placeholderApi } from '../api'
import { PostInterface } from '../types'

interface ContextInterface {
  posts: PostInterface[]
  loadPosts: () => void
  removePost: ({ post }: { post: PostInterface }) => void
  addFavorite: ({ id }: { id: number }) => void
  deleteAll: () => void
  postViewed: ({ id }: { id: number }) => void
  loading: boolean
}

const INITIAL_DATA: PostInterface[] = []

const Context = createContext<ContextInterface | undefined>(undefined)

const Provider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState(INITIAL_DATA)
  const [loading, setLoading] = useState(true)

  const loadPosts = async () => {
    const { data } = await placeholderApi.get<PostInterface[]>(`/posts`)
    const $posts = data.map((post, idx) => {
      return { ...post, isNew: idx < 20 ? true : false, isFavorite: false }
    })
    setLoading(false)
    setPosts($posts)
  }

  const removePost = async ({ post }: { post: PostInterface }) => {
    const $posts = posts.filter((e) => e.id !== post.id)
    setPosts($posts)
    await placeholderApi.delete(`posts/${post.id}`)
  }

  const addFavorite = async ({ id }: { id: number }) => {
    const $posts = posts.map((p: PostInterface) => {
      return p.id === id ? { ...p, isFavorite: !p.isFavorite } : { ...p }
    })
    setPosts($posts)
  }

  const postViewed = async ({ id }: { id: number }) => {
    const $posts = posts.map((p: PostInterface) => {
      return p.id === id ? { ...p, isNew: !p.isNew } : { ...p }
    })
    setPosts($posts)
  }

  const deleteAll = async () => {
    setPosts(INITIAL_DATA)
    //Promise.allSettled does not exist
    await Promise.all(posts.map((post) => placeholderApi.delete(`posts/${post.id}`)))
  }

  return (
    <Context.Provider value={{ loading, posts, loadPosts, removePost, addFavorite, deleteAll, postViewed }}>
      {children}
    </Context.Provider>
  )
}

const usePosts = () => {
  const state = useContext(Context)

  if (state === undefined) throw 'Error usePosts'

  return { ...state }
}

export { Provider, usePosts }
