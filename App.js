import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ModuleNav from './src/nav/ModuleNav';
import TabNav from './src/nav/TabNav';
import Settings from "./src/screens/Settings"
import SymptomLog from './src/screens/SymptomLog';
import { colors } from './src/util/constants/Colors';
import { fontSizes } from './src/util/constants/FontSizes';
import { Icon } from '@rneui/base';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('./src/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('./src/assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('./src/assets/fonts/Rubik-Bold.ttf'),
  });
  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="ModuleNav" component={ModuleNav} />
        <Stack.Screen name = "Log" component={SymptomLog} options={{
          title:"Create Entry",
          headerShown: true, 
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.lochmara }, 
          headerTitleStyle: { 
            fontFamily: 'Rubik-Medium', 
            color: colors.white, 
            fontSize: fontSizes.small 
          },
          headerBackVisible:false
        }} 
        />
        <Stack.Screen name="Settings" component={Settings}  options={{
          headerShown: true, 
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.lochmara }, 
          headerTitleStyle: { 
            fontFamily: 'Rubik-Medium', 
            color: colors.white, 
            fontSize: fontSizes.small 
          },
          title:"App Info",
          headerBackVisible:false
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;