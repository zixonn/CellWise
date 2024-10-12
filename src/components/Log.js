import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../util/constants/Colors'
import CustomText from './CustomText'

const Log = (props) => {
  return (
    <View style = {styles.con}>
        <CustomText fontFamily={"Rubik-SemiBold"} color = {"white"} margin={"3%"} fontSize={"large"}>
            {props.date}
        </CustomText>
        <CustomText fontFamily={"Rubik-Regular"} color = {"white"} marginHorizontal={"3%"} marginBottom = {"3%"}fontSize={"small"}>
            {props.description}
        </CustomText>
        <View style = {styles.bottomHalf}>
            <CustomText alignSelf={"flex-end"} fontFamily={"Rubik-Medium"} color = {"gray"}>
                    {props.time}
            </CustomText>
        </View>
    </View>
  )
}

export default Log

const styles = StyleSheet.create({
    con:{
        width:"90%",
        borderRadius:10,
        marginVertical:'1%',
        backgroundColor:"white",
        backgroundColor:colors.lochmara,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    bottomHalf:{
        borderWidth:1,
        borderColor:colors.gray,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        width:'100%', 
        padding:"2%",
        backgroundColor:"white"
    }
})