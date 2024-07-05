import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../util/constants/Colors'
import { fontSizes } from '../util/constants/FontSizes'

const CustomText = ({children,color,fontSize,fontFamily,margin,marginTop,marginBottom,marginLeft,marginRight,padding,alignSelf,onPress,
  width,textAlign,top,left,position
}) => {
  return (
    <Text onPress={onPress} style = {{color:colors[color], fontSize:fontSizes[fontSize], fontFamily:fontFamily, 
      margin:margin, marginTop:marginTop, marginBottom:marginBottom, marginLeft:marginLeft,marginRight:marginRight, padding:padding,
      alignSelf:alignSelf,width:width,textAlign:textAlign,top:top,left:left,position:position
    }}>
      {children}
    </Text>
  )
}

export default CustomText

const styles = StyleSheet.create({})