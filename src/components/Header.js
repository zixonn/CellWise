import React from 'react'
import CustomText from './CustomText'
import { View } from 'react-native'

export default function Header({children, term, newSection}) {
  return (
    ( newSection ==  true )
     ? 
     <>
     <CustomText fontSize={"small"} width={'90%'} fontFamily={"Rubik-Medium"} color = {"black"}>{"\n"}{"\n"}{children}{"\n"}</CustomText> 
     <View style = {{marginVertical:"2%"}}/>
     </>
     :  
     <>
     <CustomText fontSize={"small"}  width={'90%'} fontFamily={"Rubik-Medium"} color = {"black"}>{children}{"\n"}</CustomText>
     <View style = {{marginVertical:"2%"}}/>
     </>
  )
}
