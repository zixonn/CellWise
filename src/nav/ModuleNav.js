import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { colors } from "../util/constants/Colors"
import { fontSizes } from "../util/constants/FontSizes"
import { Icon } from "@rneui/base"
import Article from "../screens/Article"
import ArticleList from "../screens/ArticleList"

const ModuleNav = () => {
  const Stack = createStackNavigator()
  return (
    <>
        <StatusBar style='light' />
        <Stack.Navigator screenOptions={{
          gestureEnabled:false,
          headerStyle:{backgroundColor:colors.lochmara},
          headerTitleStyle:{fontFamily:"Rubik-Medium",color:colors.white,fontSize:fontSizes.small,alignSelf:"center"},
          headerTitleAlign:"center",
          headerBackTitleVisible:false,
          headerBackImage: () => <Icon containerStyle={{marginLeft:"10%"}} name = "chevron-back-outline" type='ionicon' color={colors.white}/>
          }}>
          <Stack.Screen name = "Articles" component={ArticleList}/>
          <Stack.Screen name = "Article" component={Article} options={({ route }) => ({
                        title: route.params?.articleTitle || 'Article', 
                    })}/>
        </Stack.Navigator>
    </>
  )
}

export default ModuleNav

