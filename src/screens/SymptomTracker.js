import React, { useEffect, useState } from 'react';
import { Button, View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import PageBody from '../util/constants/PageBody';
import { useUser } from '../context/UserContext';
import CustomText from '../components/CustomText';
import SymptomLog from './SymptomLog';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import LongButton from '../components/LongButton';
import Log from '../components/Log';
import * as Print from "expo-print";
import { shareAsync } from 'expo-sharing';

const SymptomTracker = ({ navigation }) => {
  const { user } = useUser();
  const [isVisible, setVisible] = useState(false);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("")

  const logSymptom = async (symptomDesc) => {
    setLoading(true);
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentLogs = docSnap.data().logs || [];
      const updatedLogs = [...currentLogs, symptomDesc];
      await updateDoc(docRef, {
        logs: updatedLogs
      });
      setLogs(updatedLogs);
    } else {
      console.log("No such document!");
    }

    setLoading(false);
    setVisible(false);
  };

  const displayLogs = async () => {
    setLoading(true);
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setLogs(docSnap.data().logs);
      setName(docSnap.data().firstName + " "+ docSnap.data().lastName)
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  };

  const clearLogs = async () => {
    setLoading(true);
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      logs: []
    });
    setLogs([]);
    setLoading(false);
  };

  const confirmClearLogs = () => {
    Alert.alert(
      "Clear Logs",
      "Are you sure you want to clear all symptom logs? This cannot be redone!",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: clearLogs }
      ]
    );
  };

  useEffect(() => {
    if (user) {
      displayLogs();
    }
  }, [user]);

  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <style>
      body {
        font-family: Helvetica Neue, Arial, sans-serif;
        padding: 20px;
        text-align: left;
        max-width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
      }
      .log-entry {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 20px;
        page-break-inside: avoid;
        break-inside: avoid;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      @media print {
        .log-entry {
          break-inside: avoid;
        }
      }
      h1 {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5px;
      }
      h2 {
        font-size: 15px;
        font-weight: normal;
        text-align: center;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 10px;
        max-width: 100%;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
    </style>
  </head>
  <body>
    <h1>Symptom Tracker</h1>
    <h2>Name: ${name}</h2>
    <div>
      ${logs && logs.length > 0 && user !== null ? (
        logs.map((obj, index) => (
          `<div class="log-entry">
            <p><strong>Description:</strong> ${obj.description}</p>
            <p><strong>Time:</strong> ${obj.time}</p>
            <p><strong>Date:</strong> ${obj.date}</p>
          </div>`
        )).join('')
      ) : ''}
    </div>
  </body>
</html>
`;


  const [selectedPrinter, setSelectedPrinter] = useState();

  const print = async () => {
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url,
    });
  };

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({ html });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync();
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
          <SymptomLog isVisible={isVisible} close={() => setVisible(false)} onLogSymptom={logSymptom} />
          <View style={{ flex: 1, width: "100%" }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '3%' }}>
              <Button title="+ Add Symptom Log" onPress={() => setVisible(true)} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              {loading ? (
                <ActivityIndicator style={{ position: "absolute", top: "35%" }} size="small" color="gray" />
              ) : (
                <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                  {logs && logs.length > 0 && user !== null ? (
                    logs.map((obj, index) => (
                      <Log
                        key={index} description={obj.description}
                        time={obj.time} date={obj.date}
                      />
                    ))
                  ) : null}
                  <View style={{ paddingBottom: "5%" }} />
                  <LongButton
                    title="Print (3 logs minimum)"
                    disabled={logs.length < 3}
                    onPress={print}
                  />
              
                  {logs.length > 0 && (
                    <>
                     <View style={{ padding: "1%" }} />
                    <CustomText fontFamily={"Rubik-Medium"} color={"tangerine"} margin={"3%"}  onPress={confirmClearLogs}>CLEAR LOGS</CustomText>
                    </>
                  )}
                  <View style={{ paddingBottom: "20%" }} />
                </ScrollView>
              )}
            </View>
          </View>
        </>
      }
    </PageBody>
  );
};

export default SymptomTracker;
