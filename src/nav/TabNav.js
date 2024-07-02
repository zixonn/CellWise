import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Learn from "../screens/Learn";
import Resources from "../screens/Resources";
import Volunteer from "../screens/Volunteer";
import { colors } from "../constants/Colors";
import { fontSizes } from "../constants/FontSizes";
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/base';
import { Alert, Text, View } from 'react-native';
import { useUser } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';
const TabNav = () => {
  const Tabs = createBottomTabNavigator();
  const {logOutUser} = useUser()
  const nav = useNavigation()
  return (
    <>
      <StatusBar style='light' />
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: colors.lochmara,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          },
          headerTitleStyle: {
            fontFamily: "Rubik-Medium",
            color: colors.white,
            fontSize: fontSizes.small,
            alignSelf: "center",
          },
          tabBarStyle: {
            borderTopColor: colors.gray,
          },
          tabBarIcon: ({ focused }) => {
            let iconName;
            let iconSize;
            let iconColor = focused ? colors.white : colors.gray;

            if (route.name === 'Learning Modules') {
              iconName = 'school';
            } else if (route.name === 'Resources') {
              iconName = 'book';
            } else if (route.name === 'Volunteer') {
              iconName = 'people';
            }

            return (
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? colors.gray : 'transparent',
                width:"100%",
                padding: "3%",
              }}>
                <Icon name={iconName} color={iconColor} size={25} />
                <Text style={{
                  color: focused ? colors.white : colors.gray,
                  fontFamily: "Rubik-Medium",
                  marginTop: "3%",
                  fontSize: 11,
                }}>
                  {route.name}
                </Text>
              </View>
            );
          },
          tabBarLabel: () => null, 
        })}
      >
         <Tabs.Screen 
          name="Learning Modules" 
          component={Learn} 
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center',width:"100%" }}>
                <Icon name="exit-to-app" color={colors.white} size={25} containerStyle={{ position:"absolute",left:"-85%"}} 
                onPress={() => {
                  Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
                    {
                      text: 'Yes',
                      onPress: () => logOutUser(() => nav.navigate("AuthNav"))
                    },
                    {text: 'No'}
                  ])
                  }}/>
                <Text style={{ color: colors.white, fontFamily: "Rubik-Medium", fontSize: fontSizes.small }}>
                  Learning Modules
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen name="Resources" component={Resources} />
        <Tabs.Screen name="Volunteer" component={Volunteer} />
      </Tabs.Navigator>
    </>
  );
};

export default TabNav;