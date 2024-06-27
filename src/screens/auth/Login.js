
import React from 'react'
import LongButton from "../../components/LongButton.js"
import CustomInput from "../../components/CusomInput.js"
import PageBody from '../../constants/PageBody.js'
import CustomText from '../../components/CustomText.js'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const nav = useNavigation()
  return (
    <PageBody>
      <Image source = {require("../../assets/images/logo.png")} resizeMode='contain' />
      <CustomText>Login</CustomText>
      <CustomInput placeholder = "Email"/>
      <CustomInput placeholder = "Password"/>
      <LongButton title = "Log in" onPress = {() => nav.navigate("TabNav",{screen:"Learn"})}/>
    </PageBody>
  )
}
 
export default Login