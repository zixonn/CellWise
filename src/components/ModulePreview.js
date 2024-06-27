import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from "../constants/Colors"
import CustomText from "../components/CustomText"

const ModulePreview = (props) => {
  return (
    <View style = {[styles.con,props.style]}>
        <CustomText margin={"3%"} fontFamily={"Rubik-Bold"} color={"white"} fontSize={"large"}>{props.label}</CustomText>
    </View>
  )
}

export default ModulePreview

const styles = StyleSheet.create({
  con:{
    backgroundColor:colors.tangerine,
    width:"90%",
    height:"25%",
    borderRadius:10,
    flexDirection:"column",
    marginVertical:"2%", alignSelf:"center"
  }
})