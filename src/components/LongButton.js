import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { colors } from '../constants/Colors'
import { fontSizes } from '../constants/FontSizes'

const LongButton = (props) => {
  return (
    <Button
    title={props.title}
    titleStyle = {{color:colors.white, fontFamily:"Rubik-SemiBold",fontSize:fontSizes.small}}
    containerStyle = {{borderRadius:10, width:"75%"}}
    color = {colors.lochmara}
    size={'lg'}
    onPress={props.onPress}
    loading = {props.loading}
    activeOpacity={0.75}
    />
  )
}

export default LongButton

const styles = StyleSheet.create({})