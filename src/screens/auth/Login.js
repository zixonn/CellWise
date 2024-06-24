import { View, Text } from 'react-native'
import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from "../../../firebase"

const Login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Login</Text>
    </View>
  )
}
 
export default Login