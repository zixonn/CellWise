import { Alert, StyleSheet, Button, View } from 'react-native';
import React, { useState } from 'react';
import { Overlay } from '@rneui/base';
import CustomText from '../components/CustomText';
import { Icon } from '@rneui/base';
import MultiLineInput from '../components/MultiLineInput';
import { getDate, getTime } from '../util/functions/getTimeAndDate';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SYMPTOM_LOG_KEY = 'SYMPTOM_LOGS';

const SymptomLog = (props) => {

 const [desc, setDesc] = useState('');

 const handleLog = async () => {
    if (desc.length <= 0) {
      Alert.alert("Error", "Please enter a description.");
    } else {
      if (props.onLogSymptom) {
        let sympData = {
          date: getDate(),
          time: getTime(),
          description: desc,
        };

        await saveSymptomLog(sympData); 

        props.onLogSymptom(sympData);
      }
      setDesc('');
      props.close();
    }
  };

  const saveSymptomLog = async (log) => {
    try {
      const existingLogs = await AsyncStorage.getItem(SYMPTOM_LOG_KEY);
      let logs = existingLogs ? JSON.parse(existingLogs) : [];
      logs.push(log);
      await AsyncStorage.setItem(SYMPTOM_LOG_KEY, JSON.stringify(logs));
    } catch (e) {
      console.log(e);
      Alert.alert("Error", "Failed to save log.");
    }
  };

  const handleCancel = () => {
    setDesc(''); 
    props.close();
  };

  return (
    <Overlay statusBarTranslucent overlayStyle={styles.overlay} animationType='slide' isVisible={props.isVisible}>
        <View style={styles.con}>
            <CustomText fontFamily={"Rubik-Medium"} fontSize={"medium"}>Create Entry</CustomText>
            <CustomText marginTop={"1%"} fontFamily={"Rubik-Medium"} color={"gray"} fontSize={"tiny"}>500 Characters Max</CustomText>
            <MultiLineInput value={desc} onChangeText={text => setDesc(text)} maxLength={500}/>
            <View style = {{flexDirection:"row",gap:20}}>
              <Button title="Cancel"  onPress={handleCancel}  />
              <Button title="Create" onPress={handleLog} disabled = {desc.length <= 0} />
            </View>
        </View>
    </Overlay>
  );
};

export default SymptomLog;

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "white",
        width: "100%",
        height: "75%",
        position: "absolute",
        bottom: "0%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    con: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
