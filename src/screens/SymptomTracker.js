import React, { useEffect, useState } from 'react';
import { Button, StyleSheet,View, ScrollView } from 'react-native';
import PageBody from '../util/constants/PageBody';
import { useUser } from '../context/UserContext';
import CustomText from '../components/CustomText';
import SymptomLog from './SymptomLog';
import { doc ,getDoc,updateDoc} from 'firebase/firestore';
import { db } from '../../firebase';
import LongButton from '../components/LongButton';
import Log from '../components/Log';
import * as Print from "expo-print"
import { shareAsync } from 'expo-sharing';
const SymptomTracker = ({navigation,route}) => {

  const {user} = useUser();
  const [isVisible, setVisible] = useState(false)
  const [logs, setLogs] = useState()
  const [desc, setDesc] = useState([]);

  const logSymptom = async (symptomDesc) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      const currentLogs = docSnap.data().logs || [];  
      const updatedLogs = [...currentLogs, symptomDesc];  
      await updateDoc(docRef, {
        logs: updatedLogs
      });

      setDesc(updatedLogs); 
    } else {
      console.log("No such document!");
    }
  
    setVisible(false); 
  };
  

  async function displayLogs(){
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data!:", docSnap.data().logs);
      setLogs(docSnap.data().logs)
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() =>{
    displayLogs()
  },[])
    
  const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body style="text-align: center;">
      <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
        Hello Expo!
      </h1>
      <img
        src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
        style="width: 90vw;" />
    </body>
  </html>
  `;

    const [selectedPrinter, setSelectedPrinter] = useState()

    const print = async () => {

      await Print.printAsync({
        html,
        printerUrl: selectedPrinter?.url, // iOS only
      });
    };

    const printToFile = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      const { uri } = await Print.printToFileAsync({ html });
      console.log('File has been saved to:', uri);
      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    };

    const selectPrinter = async () => {
      const printer = await Print.selectPrinterAsync(); // iOS only
      setSelectedPrinter(printer);
    };

  return (
    <PageBody white>
      {user == null ?
      <>
        <CustomText fontSize={"small"} fontFamily={"Rubik-SemiBold"} color={"gray"}>You must be logged in to use this feature.</CustomText>
        <Button title='Log in' onPress={() => navigation.navigate("AuthNav")} />
      </>
       : 
       <>
        <SymptomLog isVisible = {isVisible} close = {() => setVisible(false)} onLogSymptom={logSymptom}/>
        <View style = {{flex:1, width:"100%"}}>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '3%' }}>
            <Button title = "+ Add Symptomp" onPress={ () => setVisible(true)}/>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                {logs && logs.length > 0 && user !== null ? (
                  logs.map((obj, index) => (
                    <Log
                    key = {index} description = {obj.description} 
                    time= {obj.time} date ={obj.date}
                    />
                  ))
                ) : null}
                {desc.map((symptom, index) => (
                  <Log
                  key = {index} description = {symptom.description} 
                  time= {symptom.time} date ={symptom.date}
                  />
                ))}
              <View style={{ paddingBottom: "5  %" }} />
              <LongButton
               title = "Print" 
               disabled = {desc.length >=3 ? false : true}
               onPress={print}
               />
              <View style={{ paddingBottom: "20%" }} />
            </ScrollView>
          </View>
        </View>
       </> 
       }
    </PageBody>
  );
};

export default SymptomTracker ;

const styles = StyleSheet.create({});


