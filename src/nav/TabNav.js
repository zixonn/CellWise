
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Learn from "../screens/Learn"
import Resources from "../screens/Resources"
import Community from "../screens/Community"

const TabNav = () => {
    const Tabs = createBottomTabNavigator()
  return (
    <Tabs.Navigator screenOptions={{headerShown:false,gestureEnabled:false}}>
        <Tabs.Screen name = "Learn" component={Learn} />
        <Tabs.Screen name = "Resources" component={Resources} />
        <Tabs.Screen name = "Community" component={Community} />
    </Tabs.Navigator>
  )
}

export default TabNav
