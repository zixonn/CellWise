import { ScrollView, StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import PageBody from '../util//constants/PageBody';
import VolunteerBody from '../components/VolunteerBody';

const Volunteer = () => {
  const [zipCode, setZipCode] = useState('');
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <PageBody white>
      <View style={{flex:1, width:'100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center',paddingVertical: '6%'}}>
          <TextInput
            maxLength={5}
            keyboardType='number-pad'
            returnKeyType='done'
            style={styles.input}
            value={zipCode}
            onChangeText={text => setZipCode(text)}
            placeholder="Enter ZIP Code"
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <VolunteerBody url={"https://ascaa.org/"} city={"Cleveland"} state={"OH"} organization={"American Sickle Cell Anemia Association"}/>
          </ScrollView>
        </View>
      </View>
    </PageBody>
  );
};

export default Volunteer;

const styles = StyleSheet.create({
  input: {
    borderColor: 'lightgray',
    borderWidth: 1,
    width: '75%',
    padding: "3%",
    marginVertical: "2%",
    fontFamily: "Rubik-Regular",
    color:"gray",
  },
});
