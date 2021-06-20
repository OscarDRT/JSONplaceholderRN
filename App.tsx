/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'

import { Navigation } from './src/navigation'
import { ThemeProvider } from './src/shared/theme/ThemeProvider'
import { PostsProvider } from './src/shared/CreateContext'
enableScreens()

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <PostsProvider>
          <Navigation />
        </PostsProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
