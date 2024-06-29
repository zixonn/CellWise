
import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import LongButton from '../../components/LongButton'
import CustomText from '../../components/CustomText'
import PageBody from '../../constants/PageBody'

const ConfirmNewPassword = () => {
  const nav = useNavigation()
  return (
    <PageBody white>
      <Icon color = {"green"} size = {150} name = "check" type = "feather"/>
      <CustomText marginTop={"3%"}  fontFamily={"Rubik-Medium"} fontSize={"XL"}>Done!</CustomText>
      <CustomText margin = {"5%"} fontFamily={"Rubik-Regular"} fontSize={"small"} color={"gray"}>Your password has been reset.</CustomText>
      <LongButton title = "Return to Log in" onPress = {() => nav.navigate("Login")}/>
    </PageBody>
  )
}

export default ConfirmNewPassword

const styles = StyleSheet.create({})