import React, { useState } from 'react';
import { Button, View, ScrollView, ActivityIndicator, Alert, Text } from 'react-native';
import PageBody from '../util/constants/PageBody';
import Log from '../components/Log';
import * as Print from 'expo-print';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getSymptomLogHtml } from '../util/constants/symptomLogTemplate';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';

const SYMPTOM_LOG_KEY = 'SYMPTOM_LOGS';

const SymptomTracker = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigation();
  const route = useRoute();
  const { newLogAdded } = route.params || {};

  useFocusEffect(
    React.useCallback(() => {
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
    }, [newLogAdded])
  );

  const deleteLog = async (indexToDelete) => {
    const updatedLogs = logs.filter((_, index) => index !== indexToDelete);
    setLogs(updatedLogs);
    
    try {
      await AsyncStorage.setItem(SYMPTOM_LOG_KEY, JSON.stringify(updatedLogs));
    } catch (e) {
      console.error('Failed to save updated logs:', e);
      Alert.alert('Error', 'Failed to update logs.');
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
      'Are you sure you want to clear all your entries? This cannot be undone!',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: clearLogs },
      ]
    );
  };

  const print = async () => {
    const html = getSymptomLogHtml(logs);
    await Print.printAsync({ html });
  };

  const openSymptomLog = () => {
    nav.navigate('Log');
  };

  return (
    <PageBody white>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: '3%' }}>
        {logs.length > 0 && <Button title="New Entry" onPress={openSymptomLog} />}
        {logs.length > 0 && (
          <View style={{ marginLeft: "1%" }}>
            <Button title="Reset Tracker" onPress={confirmClearLogs} />
          </View>
        )}
        {logs.length > 0 && (
        <View style={{ marginLeft: "1%" }}>
            <Button disabled = {logs.length < 3} title="Print (3+ Logs)" onPress={print} />
        </View>
        )}
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {loading ? (
            <ActivityIndicator style={{ position: 'absolute', top: '35%' }} size="small" color="gray" />
          ) : logs.length === 0 ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ opacity: 0.2, margin: '2%' }}>No entries available.</Text>
              <Button title="New Entry" onPress={openSymptomLog} />
            </View>
          ) : (
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
              {logs.map((obj, index) => (
                <Log 
                  key={index} 
                  description={obj.description} 
                  time={obj.time} 
                  date={obj.date} 
                  onDelete={() => {
                    Alert.alert(
                      'Delete Entry',
                      'Are you sure you want to delete this entry?',
                      [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Delete', onPress: () => deleteLog(index) },
                      ]
                    );
                  }} 
                />
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
