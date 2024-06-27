
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Learn from "../screens/Learn"
import Resources from "../screens/Resources"
import Volunteer from "../screens/Volunteer"
import {colors} from "../constants/Colors"
import {fontSizes} from "../constants/FontSizes"
import { StatusBar } from 'expo-status-bar'

const TabNav = () => {
    const Tabs = createBottomTabNavigator()
  return (
    <>
    <StatusBar style='light'/>
    <Tabs.Navigator screenOptions={{gestureEnabled:false,headerStyle:{
     backgroundColor:colors.lochmara,borderBottomRightRadius:10,borderBottomLeftRadius:10
    },headerTitleStyle:{fontFamily:"Rubik-Medium",color:colors.white,fontSize:fontSizes.small}}}>
        <Tabs.Screen name = "Learn" component={Learn} />
        <Tabs.Screen name = "Resources" component={Resources} />
        <Tabs.Screen name = "Volunteer" component={Volunteer} />
    </Tabs.Navigator>
    </>
  )
}

export default TabNav
