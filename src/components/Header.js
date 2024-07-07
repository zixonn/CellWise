import React from 'react'
import CustomText from './CustomText'

export default function Header({children, term, newSection}) {
  return (
    ( newSection ==  true )
     ?  <CustomText fontFamily={"Rubik-Medium"} color = {"black"} fontSize={"small"}>{"\n"}{"\n"}{children}{"\n"}</CustomText> 
     :  <CustomText fontFamily={"Rubik-Medium"} color = {"black"}  fontSize={"small"}>{children}{"\n"}</CustomText>
  )
}
