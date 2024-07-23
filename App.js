import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import AuthNav from './src/nav/AuthNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ModuleNav from './src/nav/ModuleNav';
import TabNav from './src/nav/TabNav';
import { useUser, UserProvider } from './src/context/UserContext';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

const Stack = createStackNavigator();

const AppContent = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { user } = useUser();
  const navRef = useRef();

  const [loaded, error] = useFonts({
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('./src/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('./src/assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('./src/assets/fonts/Rubik-Bold.ttf'),
  });

  useEffect(() => {
    const loadResources = async () => {
      if (loaded || error) {
        await SplashScreen.hideAsync();
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
    };
    loadResources();
  }, [loaded, error]);

  useEffect(() => {
    if (navRef.current) {
      if (user) {
        navRef.current.navigate("TabNav");
      } else {
        navRef.current.navigate("AuthNav");
      }
    }
  }, [user]);

  if (!loaded || error) {
    return null; 
  }

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <NavigationContainer ref={navRef}>
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="AuthNav" component={AuthNav} />
          <Stack.Screen name="ModuleNav" component={ModuleNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Animated.View>
  );
};

const App = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

AppRegistry.registerComponent('main', () => App);

export default App;
