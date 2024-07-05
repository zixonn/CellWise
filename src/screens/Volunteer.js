import { ScrollView, StyleSheet, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import PageBody from '../util//constants/PageBody';
import CustomText from '../components/CustomText';
import VolunteerBody from '../components/VolunteerBody';
import { searchCompanies } from '../util/functions/api';

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
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  };
  
  const getWebsiteUrl = (company) => {
    if (company.website) {
      return `https://${company.website}`;
    } else if (company.profiles && company.profiles.length > 0) {
      for (let profile of company.profiles) {
        if (profile.startsWith("http")) {
          return profile; 
        }
      }
      return `https://www.${company.linkedin_slug}`;
    } else {
      return 'https://example.com';
    }
  };
  

  return (
    <PageBody>
      <View style={styles.con}>
        <View style={styles.topHalf}>
          <CustomText textAlign="left" width="75%" fontSize="small" fontFamily="Rubik-Medium" color="gray">
            Search For Health Organizations
          </CustomText>
          <TextInput
            maxLength={5}
            keyboardType='number-pad'
            returnKeyType='done'
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
                    url={getWebsiteUrl(company)}
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
    paddingVertical: '6%',
  },
  bottomHalf: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    width: '75%',
    padding: "3%",
    marginVertical: "2%",
    fontFamily: "Rubik-Regular",
    color:"gray"
  },
});
