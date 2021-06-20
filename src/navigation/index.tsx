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
    <Stack.Navigator>
      <Stack.Screen
        name={'PostsScreen'}
        component={PostsScreen}
        options={{
          title: 'Posts',
        }}
      />
      <Stack.Screen
        name={'InternalPostScreen'}
        component={InternalPostScreen}
        options={{
          title: 'Post',
        }}
      />
    </Stack.Navigator>
  )
}
