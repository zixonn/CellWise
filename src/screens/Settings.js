import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Divider } from '@rneui/base'


const Settings = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  return (
    <View style = {styles.con}> 
      <View style = {styles.container}>
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
      <Divider  style = {{width:"90%", marginVertical:"3%" }}/>
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
    marginTop:"2%"
  }
})

