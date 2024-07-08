import React, { useCallback, useEffect } from 'react';
import AuthNav from './src/nav/AuthNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import ModuleNav from './src/nav/ModuleNav';
import TabNav from './src/nav/TabNav';
import { UserProvider } from './src/context/UserContext';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const Stack = createStackNavigator();

const EXPO_PUBLIC_BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const httpLink = createHttpLink({
  uri: EXPO_PUBLIC_BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = EXPO_PUBLIC_API_KEY;
  return {
    headers: {
      ...headers,
      'Stellate-Api-Token': token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
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
    <ApolloProvider client={client}>
      <UserProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
              <Stack.Screen name="AuthNav" component={AuthNav} />
              <Stack.Screen name="TabNav" component={TabNav}/>
              <Stack.Screen name="ModuleNav" component={ModuleNav} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </UserProvider>
    </ApolloProvider>
  );
}
