import { StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { colors } from '../util/constants/Colors'
import { fontSizes } from '../util/constants/FontSizes'

const CustomInput = (props) => {
  return (
    <TextInput  
      onSubmitEditing={props.onSubmitEditing}
      textContentType="none"
      autoCorrect={false}
      maxLength={props.maxLength}
      secureTextEntry = {props.secureTextEntry}
      onChangeText={props.onChangeText}
      value ={props.value}
      placeholder= {props.placeholder}
      placeholderTextColor={colors.lightGray}
      style = {[styles.con]}
    />
  )
}

export default CustomInput

const styles = StyleSheet.create({
  con:{
    fontFamily:"Rubik-Regular",
    fontSize:fontSizes.small,
    borderWidth:1,
    borderRadius:10,
    borderColor:colors.lightGray,
    width:"75%",
    paddingHorizontal:"3%",
    padding:"5%",
    color:colors.gray,
    margin:'2%'
  }
})