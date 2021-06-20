import AsyncStorage from '@react-native-async-storage/async-storage'

export interface AsyncStorageServiceInterface {
  save: (key: string, value: string) => Promise<void>
  retrieve: (key: string) => Promise<string | null>
  delete: (key: string) => Promise<void>
  deleteAll: () => Promise<void>
}

class AsyncStorageService implements AsyncStorageServiceInterface {
  async save(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value)
  }

  async retrieve(key: string): Promise<string | null> {
    return await AsyncStorage.getItem(key)
  }

  delete(key: string): Promise<void> {
    return AsyncStorage.removeItem(key)
  }

  deleteAll(): Promise<void> {
    return AsyncStorage.clear()
  }
}

export default new AsyncStorageService()
