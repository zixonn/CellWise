import React, { useEffect } from 'react';
import AuthNav from './src/nav/AuthNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ModuleNav from './src/nav/ModuleNav';
import TabNav from './src/nav/TabNav';
import { UserProvider } from './src/context/UserContext';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const[loaded, error]= useFonts({
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

  const Stack = createStackNavigator();

  return (
      <UserProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
              <Stack.Screen name="AuthNav" component={AuthNav} />
              <Stack.Screen name="TabNav" component={TabNav}/>
              <Stack.Screen name="ModuleNav" component={ModuleNav} />
            </Stack.Navigator>
          </NavigationContainer>
      </UserProvider>
  );
}

AppRegistry.registerComponent('main', () => App);