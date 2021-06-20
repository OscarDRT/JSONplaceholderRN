import { useFocusEffect } from '@react-navigation/native'
import React from 'react'

import { placeholderApi } from '../shared/api'

export function useRequest<T>({ url }: { url: string }): { response: T | null; error: Error | null } {
  const [response, setResponse] = React.useState<T | null>(null)

  const [error, setError] = React.useState<Error | null>(null)

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async (): Promise<void> => {
        try {
          const { data } = await placeholderApi(url)
          setResponse(data)
        } catch (e) {
          setError(e)
        }
      }
      fetchData()
    }, [url])
  )
  return { response, error }
}
