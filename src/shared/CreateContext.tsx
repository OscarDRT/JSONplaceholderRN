import React, { createContext, ReactNode, useReducer, useContext } from 'react'
import { Alert } from 'react-native'

import AsyncStorageService from './AsyncStorageService'

const PostsContext = createContext(undefined)

const PostsProvider = ({ children }: { children: ReactNode }) => {
  React.useEffect(() => {
    const savePosts = async () => {
      await AsyncStorageService.save('oscar', 'david')
    }
    savePosts()
  }, [])

  return <PostsContext.Provider value={{}}>{children}</PostsContext.Provider>
}

const usePosts = () => {
  const state = useContext(PostsContext)

  if (state === undefined) throw 'Error useUser'

  return { ...state }
}

export { PostsProvider, usePosts }
