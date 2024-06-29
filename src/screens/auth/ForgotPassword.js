
import React from 'react'
import { View } from 'react-native'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import LongButton from '../../components/LongButton'
import CustomInput from '../../components/CustomInput'
import CustomText from '../../components/CustomText'
import PageBody from '../../constants/PageBody'

const ForgotPassword = () => {
  const nav = useNavigation()
  return (
    <PageBody white>
      <Icon onPress = { () => nav.goBack()} name = "arrow-back" color = "gray" size={35}
      containerStyle={{position:"absolute",top:"2%",left:"3%"}}/>
      <View style = {{width:"100%",justifyContent:"center", alignItems:"center",position:"absolute",top:"15%"}}>
        <CustomText margin={"3%"} fontFamily={"Rubik-SemiBold"} fontSize={"large"}>Forgot Password</CustomText>
        <CustomInput placeholder = "Enter email address"/>
        <LongButton marginTop = "3%" title = "Send" onPress = {() => nav.navigate("EnterCode")}/>
      </View>
    </PageBody>
  )
}

export default ForgotPassword
