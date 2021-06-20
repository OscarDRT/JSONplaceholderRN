import { useFocusEffect } from '@react-navigation/native'
import React from 'react'

import { placeholderApi } from '../shared/api'
import AsyncStorageService from '../shared/AsyncStorageService'

export function useRequest<T>({ url, key }: { url: string; key?: string }): {
  response: T | null
  error: Error | null
} {
  const [response, setResponse] = React.useState<T | null>(null)

  const [error, setError] = React.useState<Error | null>(null)

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async (): Promise<void> => {
        try {
          const { data } = await placeholderApi(url)
          if (key) {
            await AsyncStorageService.save(key, JSON.stringify(data))
          }
          setResponse(data)
        } catch (e) {
          setError(e)
        }
      }

      const saveData = async () => {
        const value = await AsyncStorageService.retrieve(key ?? '')
        if (value) {
          setResponse(JSON.parse(value))
        } else {
          fetchData()
        }
      }

      saveData()
    }, [url, key])
  )
  return { response, error }
}
