import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/Login"
import React from 'react'

const AuthNav = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:false}}>
        <Stack.Screen name = "Login" component={Login}/>
    </Stack.Navigator>
  )
}

export default AuthNav
