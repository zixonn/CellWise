import ArticleList from "../screens/ArticleList"
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors } from "../constants/Colors"
import { fontSizes } from "../constants/FontSizes"
import { Icon } from "@rneui/base"
import Article from "../screens/Article"

const ModuleNav = () => {
    const Stack = createStackNavigator()
  return (
    <>
        <StatusBar style='light' />
        <Stack.Navigator screenOptions={{
          gestureEnabled:false,
          headerStyle:{backgroundColor:colors.lochmara,borderBottomRightRadius:10,borderBottomLeftRadius:10},
          headerTitleStyle:{fontFamily:"Rubik-Medium",color:colors.white,fontSize:fontSizes.small,alignSelf:"center"},
          headerBackTitleVisible:false,headerBackImage: () => <Icon name = "arrow-back" color={colors.white} style={{marginLeft:"15%"}}/>
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

