import { ScrollView, StyleSheet, View} from 'react-native'
import React from 'react'
import PageBody from "../constants/PageBody"
import ModulePreview from "../components/ModulePreview"
import { OverviewInfo ,SymptomsInfo ,TreatmentInfo ,DiagnosisInfo ,LivingInfo  } from '../constants/ModuleInfo'
const Learn = () => {
  return (
    <PageBody>
      <ScrollView style = {{width:"100%"}} contentContainerStyle = {{flexGrow:1, alignItems:"center"}}>
        <View style = {{marginBottom:"110%",width:"100%"}}>
          <ModulePreview label = "Overview" style = {{marginTop:"5%"}} time = {"15 min"} bg = "bg1.png"
           articleInfo = {OverviewInfo}/>
          <ModulePreview label = "Symptoms"  time = {"15 min"}  bg = "bg1.png" 
          articleInfo = {SymptomsInfo }/>
          <ModulePreview label = "Diagnosis"  time = {"15 min"}  bg = "bg1.png" 
          articleInfo = {DiagnosisInfo }/>
          <ModulePreview label = "Treatment"  time = {"15 min"}  bg = "bg1.png" 
          articleInfo = {TreatmentInfo }/>
          <ModulePreview label = "Living With Sickle Cell"  time = {"15 min"}  bg = "bg1.png" 
          articleInfo = {LivingInfo}/>
        </View>
      </ScrollView>
    </PageBody>
  )
}

export default Learn

const styles = StyleSheet.create({})