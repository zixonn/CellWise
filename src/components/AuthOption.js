import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { colors } from '../util/constants/Colors'

const AuthOption = (props) => {
  return (
    <View style = {styles.con}>
     <Icon name = {props.name} type='antdesign' size={30} color={colors.tangerine}/>
    </View>
  )
}

export default AuthOption

const styles = StyleSheet.create({
  con:{
    padding:"4%",
    backgroundColor:"white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.2,
    shadowRadius: 2.5,
    elevation: 3
  }
})

