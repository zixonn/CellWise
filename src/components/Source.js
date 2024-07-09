import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Source = ({children}) => {
  return (
    <Text style = {{fontSize:10, color:"darkgray",fontStyle:"italic"}}>
    {'\n\n\n'}
        {children}
    </Text>
  )
}

export default Source

const styles = StyleSheet.create({})