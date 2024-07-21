import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Overlay } from '@rneui/base'
import CustomText from '../components/CustomText'
import { Icon } from '@rneui/base'
import LongButton from "../components/LongButton"
import MultiLineInput from '../components/MultiLineInput'
import { getDate, getTime } from '../util/functions/getTimeAndDate'

const SymptomLog = (props) => {

 const [desc,setDesc] = useState()
 const handleLog = () => {
    if(desc.length <=0){
      Alert.alert("Error", "Please enter a description")
    }else{
      if (props.onLogSymptom) {
        let sympData = {
          date:getDate(),
          time:getTime(),
          description:desc
        }
        props.onLogSymptom(sympData);
      }
      setDesc(''); 
      props.close(); 
    }
  };

  return(
    <Overlay overlayStyle = {styles.overlay} animationType='slide' isVisible = {props.isVisible}>
        <View style = {styles.con}>
            <Icon containerStyle = {{position:"absolute",top:'2%',left:"3%"}} name = "close" color={"gray"} size={30} onPress={props.close}/>
            <CustomText fontFamily={"Rubik-Medium"} fontSize={"medium"}>Log Your Symptoms</CustomText>
            <MultiLineInput value = {desc} onChangeText = {text => setDesc(text)}/>
            <LongButton title = "Log" onPress={handleLog}/>
        </View>
    </Overlay>
  )
}

export default SymptomLog

const styles = StyleSheet.create({
    overlay:{
        backgroundColor:"white",
        width:"100%",
        height:"90%",
        position:"absolute",
        bottom:"0%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})