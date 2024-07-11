import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { colors } from '../util/constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useUser } from '../context/UserContext'

const AuthOption = (props) => {

  return (
    <TouchableOpacity style = {styles.con}>
      <Icon onPress={() => signInWithGoogle()} name = {props.name} type='antdesign' size={30} color={colors.tangerine}/>
    </TouchableOpacity>
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

