import { StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import { fontSizes } from '../constants/FontSizes'

const CusomInput = (props) => {
  return (
    <TextInput  
      placeholder= {props.placeholder}
      placeholderTextColor={colors.lightGray}
      style = {styles.con}
    />
  )
}

export default CusomInput

const styles = StyleSheet.create({
  con:{
    width:"75%",
    borderWidth:1,
    borderRadius:10,
    borderColor:colors.lightGray,
    paddingHorizontal:"3%",
    padding:"3%",
    color:colors.gray,
    fontFamily:"Rubik-Regular",
    fontSize:fontSizes.small
  }
})