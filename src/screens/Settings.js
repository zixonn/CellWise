import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Divider, Icon } from '@rneui/base'


const Settings = ({navigation}) => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  
  return (
    <View style = {styles.con}> 
      <View style = {{width:"90%", flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
        <Text style = {styles.header}>Privacy Policy</Text>
          <Icon name = "exit-to-app" onPress={() => Linking.openURL("https://www.termsfeed.com/live/33476ef5-b10d-4084-b540-3bb802d2777d")}/>
      </View>
      <Divider  style = {{width:"90%", marginVertical:"3%" }}/>
      <View style = {{width:"90%", flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
        <Text style = {styles.header}>Version</Text>
        <Text>1.0.0</Text>
      </View>
      <View style = {{justifyContent:"flex-start",alignSelf:"flex-start",margin:"5%"}}>
        <Button title='Back' onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  con:{
    flex:1,
    alignItems:"center",
    backgroundColor:"white",
    paddingTop:"7%"
  },
  container:{
    width:"90%"
  },
  header:{
    fontWeight:"bold",
    fontSize: 16,
  }
})




/**\
 * 
 * <View style = {styles.container}>
        <Text style = {styles.header}>Theme</Text>
        <Picker 
          selectedValue={selectedTheme}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedTheme(itemValue)
          }>
          <Picker.Item label="Light" value="light" />
          <Picker.Item label="Dark" value="dark" />
          <Picker.Item label="System" value="system" />
        </Picker>
      </View>
      <Divider  style = {{width:"90%", marginVertical:"5%" }}/>
      <View style = {styles.container}>
      <Text style = {styles.header}>Language</Text>
        <Picker 
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            selectedLanguage(itemValue)
          }>
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="French" value="fr" />
        </Picker>
      </View>
      <Divider  style = {{width:"90%", marginVertical:"3%" }}/>
 */