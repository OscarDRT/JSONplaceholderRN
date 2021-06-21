import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PostsScreen from '../screens/Posts'
import InternalPostScreen from '../screens/InternalPost'
import { usePosts } from '../shared/Context/CreateContext'

import { RootStackParamList } from './type'

export const Navigation = () => {
  const { loading, loadPosts } = usePosts()

  React.useEffect(() => {
    if (loading) {
      loadPosts()
    }
  }, [loading, loadPosts])

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'PostsScreen'} component={PostsScreen} />
      <Stack.Screen name={'InternalPostScreen'} component={InternalPostScreen} />
    </Stack.Navigator>
  )
}
