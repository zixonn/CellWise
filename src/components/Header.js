import React from 'react'
import CustomText from './CustomText'

export default function Header({children, term, newSection}) {
  return (
    ( newSection ==  true )
     ?  <CustomText fontSize={"small"} width={'90%'} fontFamily={"Rubik-Medium"} color = {"black"}>{"\n"}{"\n"}{children}{"\n"}</CustomText> 
     :  <CustomText fontSize={"small"}  width={'90%'} fontFamily={"Rubik-Medium"} color = {"black"}>{children}{"\n"}</CustomText>
  )
}
