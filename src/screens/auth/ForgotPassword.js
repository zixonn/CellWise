
import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import LongButton from '../../components/LongButton'
import CustomInput from '../../components/CustomInput'
import CustomText from '../../components/CustomText'
import PageBody from '../../constants/PageBody'
import { sendPasswordResetEmail } from 'firebase/auth'
import {auth} from "../../../firebase"

const ForgotPassword = () => {
  const nav = useNavigation()
  const [email,setEmail] = useState()

  const sendEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Password Reset Email Sent',
        'Check your email for instructions to reset your password.',
      );
      nav.navigate('AuthNav',{screen:"Login"}); 
    } catch (error) {
      console.log('Error sending password reset email:', error.message);
      Alert.alert(
        'Error',
        'Failed to send password reset email. Please check your email address and try again.',
      );
    }
  };

  return (
    <PageBody white>
      <Icon onPress = { () => nav.goBack()} name = "arrow-back" color = "gray" size={35}
      containerStyle={{position:"absolute",top:"2%",left:"3%"}}/>
      <View style = {{width:"100%",justifyContent:"center", alignItems:"center",position:"absolute",top:"15%"}}>
        <CustomText margin={"3%"} fontFamily={"Rubik-SemiBold"} fontSize={"large"}>Forgot Password</CustomText>
        <CustomInput value = {email} onChangeText = {text => setEmail(text)} placeholder = "Enter email address"/>
        <LongButton marginTop = "3%" title = "Send" onPress = {() => sendEmail() }/>
      </View>
    </PageBody>
  )
}

export default ForgotPassword
