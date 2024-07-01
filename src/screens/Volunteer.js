import { ScrollView, StyleSheet,View } from 'react-native'
import React from 'react'
import PageBody from "../constants/PageBody"
import CustomText from  "../components/CustomText"
import CustomInput from "../components/CustomInput"
import VolunteerBody from '../components/VolunteerBody'

const Volunteer = () => {
  return (
    <PageBody>
      <View style = {styles.con}>
        <View style = {styles.topHalf}>
          <CustomText textAlign={"left"} width={"75%"} fontSize={"small"}  fontFamily={"Rubik-Medium"} color = {"gray"}>
            Search For Opprotunities
          </CustomText>
          <CustomInput placeholder = "Enter ZIP Code"/>
        </View>
        <View style = {styles.bottomHalf}>
           <ScrollView style = {{width:'100%'}} contentContainerStyle = {{flexGrow:1, alignItems:"center"}}>
              <View style = {{marginBottom:"25%",width:"100%"}}>
                <VolunteerBody/>
                <VolunteerBody/>
                <VolunteerBody/>
                <VolunteerBody/>
              </View>
           </ScrollView>
        </View>
      </View>
    </PageBody>
  )
}

export default Volunteer

const styles = StyleSheet.create({
  con:{
    flex:1,
    width:'100%'
  },
  topHalf:{
   // borderWidth:1,
    borderColor:"red",
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:'5%'
  },
  bottomHalf:{
   // borderWidth:3,
    borderColor:'green',
    justifyContent:"center",
    alignItems:"center",
    height:'100%'
  }
})