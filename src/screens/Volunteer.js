import { ScrollView, StyleSheet, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import PageBody from '../constants/PageBody';
import CustomText from '../components/CustomText';
import VolunteerBody from '../components/VolunteerBody';
import { searchCompanies } from '../context/api';

const Volunteer = () => {
  const [zipCode, setZipCode] = useState('');
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true); 
    try {
      const data = await searchCompanies(zipCode);
      setCompanies(data.data); 
      console.log(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch volunteer opportunities. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <PageBody>
      <View style={styles.con}>
        <View style={styles.topHalf}>
          <CustomText textAlign="left" width="75%" fontSize="small" fontFamily="Rubik-Medium" color="gray">
            Search For Opportunities
          </CustomText>
          <TextInput
            style={styles.input}
            onSubmitEditing={handleSearch}
            value={zipCode}
            onChangeText={text => setZipCode(text)}
            placeholder="Enter ZIP Code"
          />
        </View>
        <View style={styles.bottomHalf}>
          {loading ? (
            <ActivityIndicator style={{ position: "absolute", top: '25%' }} color="gray" />
          ) : (
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
              <View style={{ marginBottom: '25%', width: '100%' }}>
                {companies.map(company => (
                  <VolunteerBody
                    key={company.id}
                    city={company.location?.locality ? capitalizeFirstLetter(company.location.locality) : 'N/A'}
                    state={company.location?.region ? capitalizeFirstLetter(company.location.region) : 'N/A'}
                    organization={company.name ? capitalizeFirstLetter(company.name) : 'N/A'}
                  />
                ))}
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </PageBody>
  );
};

export default Volunteer;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    width: '100%',
  },
  topHalf: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '5%',
  },
  bottomHalf: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '75%',
    padding: 10,
    marginVertical: 10,
  },
});
