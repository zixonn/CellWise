import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageBody from '../util/constants/PageBody'
import CustomText from '../components/CustomText'
import { Divider } from '@rneui/base'

const Settings = () => {
  return (
    <PageBody white> 
      <Divider  style = {{width:"90%", marginVertical:"6%" }}/>
      <Divider  style = {{width:"90%", marginVertical:"6%" }}/>
      <Divider  style = {{width:"90%", marginVertical:"6%" }}/>
      <Divider  style = {{width:"90%", marginVertical:"6%" }}/>
      <Divider  style = {{width:"90%", marginVertical:"6%" }}/>
    </PageBody>
  )
}

export default Settings

const styles = StyleSheet.create({})


/**
  Dark / Light mode
  Language (if time)
  Privacy policy / TOS
  Contact support
  Version
 */