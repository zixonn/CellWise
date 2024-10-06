import React, { useState } from 'react';
import { Button, View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import PageBody from '../util/constants/PageBody';
import CustomText from '../components/CustomText';
import SymptomLog from './SymptomLog';
import LongButton from '../components/LongButton';
import Log from '../components/Log';
import * as Print from 'expo-print';

const SymptomTracker = () => {
  const [isVisible, setVisible] = useState(false);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('John Doe');

  const logSymptom = (symptomDesc) => {
    setLoading(true);
    const updatedLogs = [...logs, symptomDesc];
    setLogs(updatedLogs);
    setLoading(false);
    setVisible(false);
  };

  const clearLogs = () => {
    setLoading(true);
    setLogs([]);
    setLoading(false);
  };

  const confirmClearLogs = () => {
    Alert.alert(
      'Clear Logs',
      'Are you sure you want to clear all symptom logs? This cannot be undone!',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: clearLogs }
      ]
    );
  };

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
      ${logs.length > 0
        ? logs
            .map(
              (obj) => `
          <div class="log-entry">
            <p><strong>Description:</strong> ${obj.description}</p>
            <p><strong>Time:</strong> ${obj.time}</p>
            <p><strong>Date:</strong> ${obj.date}</p>
          </div>
        `
            )
            .join('')
        : ''}
    </div>
  </body>
</html>
`;

  const [selectedPrinter, setSelectedPrinter] = useState();

  const print = async () => {
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url
    });
  };

  return (
    <PageBody white>
      <SymptomLog isVisible={isVisible} close={() => setVisible(false)} onLogSymptom={logSymptom} />
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '3%' }}>
          <Button title="+ Add Symptom Log" onPress={() => setVisible(true)} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {loading ? (
            <ActivityIndicator style={{ position: 'absolute', top: '35%' }} size="small" color="gray" />
          ) : (
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
              {logs.length > 0 &&
                logs.map((obj, index) => (
                  <Log key={index} description={obj.description} time={obj.time} date={obj.date} />
                ))}
              <View style={{ paddingBottom: '5%' }} />
              <LongButton title="Print (3 logs minimum)" disabled={logs.length < 3} onPress={print} />
              {logs.length > 0 && (
                <>
                  <View style={{ padding: '1%' }} />
                  <CustomText fontFamily="Rubik-Medium" color="tangerine" margin="3%" onPress={confirmClearLogs}>
                    CLEAR LOGS
                  </CustomText>
                </>
              )}
              <View style={{ paddingBottom: '20%' }} />
            </ScrollView>
          )}
        </View>
      </View>
    </PageBody>
  );
};

export default SymptomTracker;
