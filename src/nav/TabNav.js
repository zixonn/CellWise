import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/base';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Learn from '../screens/Learn';
import Glossary from '../screens/Glossary';
import SymptomTracker from '../screens/SymptomTracker';
import { colors } from '../util/constants/Colors';
import { fontSizes } from '../util/constants/FontSizes';

const TabNav = () => {
  const Tabs = createBottomTabNavigator();
  const nav = useNavigation();

  const renderIcon = (routeName, focused) => {
    const icons = {
      'Learning Modules': { name: 'school', type: 'ionicons' },
      'Glossary': { name: 'book', type: 'entypo' },
      'Symptom Tracker': { name: 'health-and-safety', type: 'alert' },
    };

    const icon = icons[routeName];
    const color = focused ? colors.gray : colors.lightGray;

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Icon name={icon.name} type={icon.type} color={color} size={23} />
        <Text style={{ color, fontFamily: 'Rubik-Medium', fontSize: 10, marginVertical: '1%' }}>
          {routeName}
        </Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.lochmara },
          headerTitleStyle: { fontFamily: 'Rubik-Medium', color: colors.white, fontSize: fontSizes.small },
          tabBarStyle: { borderTopColor: colors.gray },
          tabBarIcon: ({ focused }) => renderIcon(route.name, focused),
          tabBarLabel: () => null,
        })}
      >
        <Tabs.Screen
          name="Learning Modules"
          component={Learn}
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <Text style={{ color: colors.white, fontFamily: 'Rubik-Medium', fontSize: fontSizes.small }}>
                  Learning Modules
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen name="Glossary" component={Glossary} />
        <Tabs.Screen name="Symptom Tracker" component={SymptomTracker} />
      </Tabs.Navigator>
    </>
  );
};

export default TabNav;


/**
 *           <Icon
                  name="settings"
                  color={colors.white}
                  size={25}
                  onPress={() => nav.navigate('Settings')}
                  containerStyle={{ position: 'absolute', right: '160%', marginLeft: '5%' }}
                />
 */