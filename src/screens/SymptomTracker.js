import React, { useState, useEffect } from 'react';
import { Button, View, ScrollView, ActivityIndicator, Alert, Text } from 'react-native';
import PageBody from '../util/constants/PageBody';
import SymptomLog from './SymptomLog';
import Log from '../components/Log';
import * as Print from 'expo-print';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getSymptomLogHtml } from '../util/constants/symptomLogTemplate';

const SYMPTOM_LOG_KEY = 'SYMPTOM_LOGS';

const SymptomTracker = () => {
  const [isVisible, setVisible] = useState(false);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('John Doe');
  const [selectedPrinter, setSelectedPrinter] = useState();

  useEffect(() => {
    const loadLogs = async () => {
      setLoading(true);
      try {
        const storedLogs = await AsyncStorage.getItem(SYMPTOM_LOG_KEY);
        if (storedLogs) {
          setLogs(JSON.parse(storedLogs));
        }
      } catch (e) {
        console.error('Failed to load logs:', e);
      }
      setLoading(false);
    };
    loadLogs();
  }, []);

  const logSymptom = async (symptomDesc) => {
    setLoading(true);
    const updatedLogs = [...logs, symptomDesc];
    setLogs(updatedLogs);
    await saveLogsToStorage(updatedLogs);
    setLoading(false);
    setVisible(false);
  };

  const saveLogsToStorage = async (logs) => {
    try {
      await AsyncStorage.setItem(SYMPTOM_LOG_KEY, JSON.stringify(logs));
    } catch (e) {
      console.error('Failed to save logs:', e);
      Alert.alert('Error', 'Failed to save logs.');
    }
  };

  const clearLogs = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem(SYMPTOM_LOG_KEY);
      setLogs([]);
    } catch (e) {
      console.error('Failed to clear logs:', e);
      Alert.alert('Error', 'Failed to clear logs.');
    }
    setLoading(false);
  };

  const confirmClearLogs = () => {
    Alert.alert(
      'Reset Symptom Tracker',
      'Are you sure you want to clear all your logs? This cannot be undone!',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: clearLogs }
      ]
    );
  };

  const print = async () => {
    const html = getSymptomLogHtml(name, logs);
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url,
    });
  };

  return (
    <PageBody white>
      <SymptomLog 
        isVisible={isVisible} 
        close={() => setVisible(false)} 
        onLogSymptom={logSymptom} 
      />
      
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: "3%" }}>
        <Button title="New Entry" onPress={() => setVisible(true)} />
        {logs.length >= 3 && (
          <View style={{ marginLeft: 10 }}>
            <Button title="Print Tracker" onPress={print} />
          </View>
        )}
        {logs.length > 0 && (
          <View style={{ marginLeft: 10 }}>
            <Button title="Reset Tracker" onPress={confirmClearLogs} />
          </View>
        )}
      </View>

      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {loading ? (
            <ActivityIndicator style={{ position: 'absolute', top: '35%' }} size="small" color="gray" />
          ) : logs.length === 0 ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style = {{opacity:0.2}}>No symptom logs available.</Text>
            </View>
          ) : (
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
              {logs.map((obj, index) => (
                <Log key={index} description={obj.description} time={obj.time} date={obj.date} />
              ))}
              <View style={{ paddingBottom: '20%' }} />
            </ScrollView>
          )}
        </View>
      </View>
    </PageBody>
  );
};

export default SymptomTracker;
