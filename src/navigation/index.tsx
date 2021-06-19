import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity } from 'react-native'

import PostsScreen from '../screens/Posst'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator()

const Home2 = () => {
  return <View style={{ flex: 1, backgroundColor: 'red' }} />
}

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
        <Text>go home2</Text>
      </TouchableOpacity>
    </View>
  )
}

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
    </Stack.Navigator>
  )
}
