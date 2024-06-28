import { SafeAreaView, View} from 'react-native'
import React from 'react'

const PageBody = ({children,white}) => {
  return (
    white ? 
      <>
      <SafeAreaView backgroundColor = "white" />
      <View className = "flex-1 justify-center items-center bg-white" >
          {children}
      </View>
      </>
    :
      <>
      <SafeAreaView/>
      <View className = "flex-1 justify-center items-center" >
          {children}
      </View> 
      </>
  )
}

export default PageBody

