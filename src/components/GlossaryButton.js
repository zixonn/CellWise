import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {colors} from "../util/constants/Colors"
import CustomText from './CustomText'
import { Icon } from '@rneui/base'

const GlossaryButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style =  {styles.con}>
        <CustomText fontFamily={"Rubik-Bold"} color={"white"} fontSize={"medium"}>
           View Glossary
        </CustomText>
        <Icon color={"white"} name="arrowright" type = "antdesign" size={30}/>
    </TouchableOpacity>
  )
}

export default GlossaryButton

const styles = StyleSheet.create({
    con:{
        backgroundColor:colors.lochmara,
        width:"90%",
        height:"10%",
        borderRadius:10,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:'row',
        paddingHorizontal:"5%",
    }
})