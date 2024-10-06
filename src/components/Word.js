import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../util/constants/Colors'
import CustomText from './CustomText'

const Word = (props) => {
  return (
    <View style = {styles.con}>
        <View style = {styles.topHalf}>
            <CustomText color={"white"} fontFamily={"Rubik-Medium"} fontSize={"small"}>{props.term}</CustomText>
        </View>
        <CustomText  margin={"3%"} color={"gray"} fontFamily={"Rubik-Regular"}>
            {props.def}
        </CustomText>
    </View>
  )
}

export default Word

const styles = StyleSheet.create({
    con:{
        width:"85%",
        borderWidth:1,
        borderColor:colors.tangerine,
        borderRadius:10,
        marginVertical:'1%',
        backgroundColor:"white"
    },
    topHalf:{
        backgroundColor:colors.tangerine,
        width:'100%', 
        padding:"3%",
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        justifyContent:"center",
        paddingHorizontal:"3%"
    }
})