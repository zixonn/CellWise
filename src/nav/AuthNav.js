import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/auth/Login"
import Register from "../screens/auth/Register"
import ForgotPassword from "../screens/auth/ForgotPassword"
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const AuthNav = () => {
    const Stack = createStackNavigator()
  return (
    <>
      <StatusBar style='dark'/>
      <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:false}}>
          <Stack.Screen name = "Login" component={Login}/>
          <Stack.Screen name = "Register" component={Register}/>
          <Stack.Screen name = "ForgotPassword" component={ForgotPassword}/>
      </Stack.Navigator>
    </>
  )
}

export default AuthNav
