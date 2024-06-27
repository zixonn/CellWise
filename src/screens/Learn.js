import { ScrollView, StyleSheet, View} from 'react-native'
import React from 'react'
import PageBody from "../constants/PageBody"
import ModulePreview from "../components/ModulePreview"

const Learn = () => {
  return (
    <PageBody>
      <ScrollView style = {{width:"100%"}} contentContainerStyle = {{flexGrow:1, alignItems:"center"}}>
        <View style = {{marginBottom:"110%",width:"100%"}}>
          <ModulePreview label = "Overview" style = {{marginTop:"5%"}}/>
          <ModulePreview label = "Symptoms"/>
          <ModulePreview label = "Diagnosis"/>
          <ModulePreview label = "Treatment"/>
          <ModulePreview label = "Living With Sickle Cell"/>
        </View>
      </ScrollView>
    </PageBody>
  )
}

export default Learn

const styles = StyleSheet.create({})