import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { colors } from '../constants/Colors'
import { Icon } from '@rneui/base'

const VolunteerBody = () => {

  return (
    <View style = {styles.con}>
      <CustomText fontFamily={"Rubik-SemiBold"} color = {"lochmara"} fontSize={"medium"}>Hanover, MD</CustomText>
      <CustomText marginTop={"2%"} fontFamily={"Rubik-Medium"} color = {"gray"} >
        Sickle Cell Disease Association of America 
      </CustomText>
      <TouchableOpacity style = {styles.box} activeOpacity={0.85}>
        <Icon name = "paper-plane" type = "entypo" color = {colors.white} size={20}/>
      </TouchableOpacity>
    </View>
  )
}

export default VolunteerBody

const styles = StyleSheet.create({
  con:{
    alignSelf:"center",
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:colors.gray,
    margin:"1%",
    width:"100%",
    padding:"5%"
  },
  box:{
    backgroundColor:colors.gray,
    position:"absolute",
    padding:'3%',
    left:"100%",
    borderBottomLeftRadius:15
  }
})