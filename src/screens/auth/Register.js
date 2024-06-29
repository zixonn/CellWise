
import React from 'react'
import PageBody from '../../constants/PageBody'
import CustomText from '../../components/CustomText'
import CustomInput from '../../components/CustomInput'
import LongButton from '../../components/LongButton'
import AuthOption from '../../components/AuthOption'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '@rneui/base'
import { colors } from '../../constants/Colors'
import { View } from 'react-native'

const Register = () => {
  const navigation = useNavigation()
  return (
    <PageBody white> 
      <CustomText marginBottom={"3%"} fontFamily={"Rubik-SemiBold"} fontSize={"XL"}>Sign Up</CustomText>
      <CustomInput placeholder = "First name"/>
      <CustomInput placeholder = "Last name"/>
      <CustomInput placeholder = "Email"/>
      <CustomInput placeholder = "Password"/>
      <CustomInput placeholder = "Confirm Password"/>
      <LongButton margin = {"2%"} marginBottom ={"5%"} title = "Register"/>
      <Divider width = {1} color = {colors.lightGray} style = {{width:"85%"}}/>
      <View style = {{flexDirection:"row", gap:"20%", marginTop:"5%", marginBottom:"5%"}}>
        <AuthOption name = "google"/>
        <AuthOption name = "facebook-square"/>
        <AuthOption name = "apple1"/>
      </View>
      <CustomText  fontFamily={"Rubik-Medium"} color = {"lightGray"}>Already have an account?
        <CustomText fontFamily={"Rubik-Medium"} color = {"tangerine"} onPress = { () => navigation.goBack()}>  Log in</CustomText>
      </CustomText>
    </PageBody>
  )
}

export default Register
