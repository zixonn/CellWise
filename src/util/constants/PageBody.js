import { SafeAreaView, View} from 'react-native'
import React from 'react'

const PageBody = ({children,white, style}) => {
  return (
    white ? 
      <>
      <SafeAreaView backgroundColor = "white" />
      <View className = "flex-1 justify-center items-center bg-white" style = {style} >
          {children}
      </View>
      </>
    :
      <>
      <SafeAreaView/>
      <View className = "flex-1 justify-center items-center" style = {style} >
          {children}
      </View> 
      </>
  )
}

export default PageBody

