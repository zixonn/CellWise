import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
const BulletPoint = ({children}) => {
  return (
    <View style={{ marginVertical:'0.5%'}}>
    <CustomText width="90%" fontFamily="Rubik-Regular" color="gray">
      ● {children}
    </CustomText>
  </View>
  )
}

export default BulletPoint

const styles = StyleSheet.create({})