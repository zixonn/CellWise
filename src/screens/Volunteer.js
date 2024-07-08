import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TextInput, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useLazyQuery } from '@apollo/client'; 
import PageBody from '../util/constants/PageBody';
import VolunteerBody from '../components/VolunteerBody';
import { GET_ORGANIZATIONS } from '../graphql/queries'; 

const Volunteer = () => {
  const [state, setState] = useState('');
  const [getOrganizations, { loading, error, data }] = useLazyQuery(GET_ORGANIZATIONS);

  const handleSearch = () => {
    if (state.trim() !== '') {
      getOrganizations({ variables: { term: "sickle cell", state: state.trim() } });
    }
  };

  console.log('Data:', data);
  return (
    <PageBody white>
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '6%' }}>
          <TextInput
               returnKeyType='done'
               keyboardType='ascii-capable'
               style={styles.input}
               value={state}
               onChangeText={text => setState(text)}
               placeholder="Enter State (e.g., OH, NY)"
          />
          <TouchableOpacity onPress={handleSearch} style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          {loading ? (
            <ActivityIndicator style={{position:"absolute", top:"25%"}} size="small" color="gray" />
          ) : (
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                 {data &&
                data.publicSearchFaceted &&
                data.publicSearchFaceted.results.map(org => (
                  <VolunteerBody
                    key={org.ein}
                    url={`https://${org.organization_url}`}
                    city={org.city}
                    state={org.state}
                    organization={org.name}
                  />
                ))}
            </ScrollView>
          )}
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
    padding: '3%',
    marginVertical: '2%',
    fontFamily: 'Rubik-Regular',
    color: 'gray',
  },
  button: {
    marginTop: '2%',
    backgroundColor: '#007AFF',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});
