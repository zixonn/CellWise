import { SafeAreaView, View} from 'react-native'
import React from 'react'

const PageBody = ({children}) => {
  return (
    <>
        <SafeAreaView backgroundColor = "white" />
        <View className = "flex-1 justify-center items-center bg-white" >
            {children}
        </View>
    </>
  )
}

export default PageBody

