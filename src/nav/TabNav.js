
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../screens/Home'

const TabNav = () => {
    const Tabs = createBottomTabNavigator()
  return (
    <Tabs.Navigator screenOptions={{headerShown:false,gestureEnabled:false}}>
        <Tabs.Screen name = "Home.js" component={Home} />
    </Tabs.Navigator>
  )
}

export default TabNav
