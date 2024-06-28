import React, {useCallback} from 'react';
import AuthNav from './src/nav/AuthNav';
import TabNav from './src/nav/TabNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import ModuleNav from './src/nav/ModuleNav';

export default function App() {

  const Stack = createStackNavigator()

  const [fontsLoaded, fontError] = useFonts({
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('./src/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('./src/assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('./src/assets/fonts/Rubik-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name="AuthNav" component={AuthNav} />
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name = "ModuleNav" component = {ModuleNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  </View>
  );
}

