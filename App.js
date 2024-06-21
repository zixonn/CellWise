import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthNav from './src/nav/AuthNav';
import TabNav from './src/nav/TabNav';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:false}}>
          <Stack.Screen name = "AuthNav" component={AuthNav} />
          <Stack.Screen name = "TabNav" component={TabNav} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

