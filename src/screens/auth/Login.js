
import React from 'react'
import LongButton from "../../components/LongButton.js"
import CustomInput from "../../components/CustomInput.js"
import PageBody from '../../constants/PageBody.js'
import CustomText from '../../components/CustomText.js'
import AuthOption from '../../components/AuthOption.js'
import { Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '@rneui/base'
import { colors } from '../../constants/Colors.js'
import { View } from 'react-native'

const Login = () => {
  const nav = useNavigation()
  return (
    <PageBody white>
      <Image source = {require("../../assets/images/logo.png")} resizeMode='contain' />
      <CustomText margin = {"5%"} fontFamily={"Rubik-SemiBold"} fontSize={"XL"}>Log In</CustomText>
      <CustomInput placeholder = "Email"/>
      <CustomInput placeholder = "Password"/>
      <CustomText marginTop={"2%"} textAlign={"right"} width={"75%"}  fontFamily={"Rubik-Medium"} color = {"lochmara"} onPress = {() => nav.navigate("ForgotPassword")}>
        Forgot Password?
      </CustomText>
      <LongButton marginTop = {"6%"} title = "Log in" onPress = {() => nav.navigate("TabNav",{screen:"Learn"})}/>
      <CustomText fontSize={"small"} fontFamily={"Rubik-Bold"} color = {"gray"} margin={"5%"}>or</CustomText>
      <Divider width={1} color = {colors.lightGray} style = {{width:"85%"}}/>
      <View style = {{flexDirection:"row", gap:"20%", marginTop:"5%", marginBottom:"10%"}}>
        <AuthOption name = "google"/>
        <AuthOption name = "facebook-square"/>
        <AuthOption name = "apple1"/>
      </View>
      <CustomText  fontFamily={"Rubik-Medium"} color = {"lightGray"}>Don't have an account?
        <CustomText fontFamily={"Rubik-Medium"} color = {"tangerine"} onPress = { () => nav.navigate("Register")}>  Register Now</CustomText>
      </CustomText>
    </PageBody>
  )
}
 
export default Login

