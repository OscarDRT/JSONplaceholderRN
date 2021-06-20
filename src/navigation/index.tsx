import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PostsScreen from '../screens/Posts'
import InternalPostScreen from '../screens/InternalPost'

import { RootStackParamList } from './type'

export const Navigation = () => {
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
