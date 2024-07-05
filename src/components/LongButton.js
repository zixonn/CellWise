import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { colors } from '../util/constants/Colors'
import { fontSizes } from '../util/constants/FontSizes'

const LongButton = (props) => {
  return (
    <Button
    disabled = {props.disabled}
    title={props.title}
    titleStyle = {{color:colors.white, fontFamily:"Rubik-SemiBold",fontSize:fontSizes.medium}}
    containerStyle = {{borderRadius:10, width:"75%",margin:props.margin, marginTop:props.marginTop, marginBottom:props.marginBottom}}
    buttonStyle = {{padding:"6%"}}
    color = {colors.lochmara}
    onPress={props.onPress}
    loading = {props.loading}
    activeOpacity={0.75}
    >
      {props.loading ?  <ActivityIndicator color = {"white"}/> : props.title}
    </Button>
  )
}

export default LongButton

const styles = StyleSheet.create({})