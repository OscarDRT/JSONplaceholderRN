import { useFocusEffect } from '@react-navigation/native'
import React from 'react'

import AsyncStorageService from '../shared/AsyncStorageService'
import { PostInterface } from '../shared/types'

import { useRequest } from './useRequest'

const useTransformPosts = () => {
  const [posts, setPosts] = React.useState<PostInterface[]>([])

  const { response } = useRequest<PostInterface[]>({
    url: `/posts`,
  })

  const transformPosts = async () => {
    const value = await AsyncStorageService.retrieve('FIRST_LOAD')

    if (response && !value) {
      const $posts = response.map((post, idx) => {
        return { ...post, isNew: idx < 20 ? true : false, isFavorite: false }
      })

      await AsyncStorageService.save('POSTS', JSON.stringify($posts))
      await AsyncStorageService.save('FIRST_LOAD', 'true')
    }
    Promise.resolve()
  }

  const removePost = async ({ post }: { post: PostInterface }) => {
    const newPosts = posts.filter((e) => e.id !== post.id)
    setPosts(newPosts)
    await AsyncStorageService.save('POSTS', JSON.stringify(newPosts))
  }

  const addFavorite = async ({ id }: { id: number }) => {
    const $posts = posts.map((p: PostInterface) => {
      return p.id === id ? { ...p, isFavorite: !p.isFavorite } : { ...p }
    })

    await AsyncStorageService.save('POSTS', JSON.stringify($posts))
  }

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorageService.retrieve('POSTS')
        .then((r) => {
          setPosts(JSON.parse(r ?? '[]'))
        })
        .catch(() => setPosts(response ?? []))
    }, [response])
  )

  return { transformPosts, posts, setPosts, removePost, addFavorite }
}

export default useTransformPosts
