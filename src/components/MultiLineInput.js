import { Keyboard, StyleSheet, TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import React from 'react';
import { colors } from '../util/constants/Colors';
import { fontSizes } from '../util/constants/FontSizes';


const MultiLineInput = (props) => {
  return (
      <TextInput  
        placeholder="Describe Symptoms"
        onChangeText={props.onChangeText}
        value={props.value}
        style={styles.con}
        multiline
        returnKeyType='done'
        blurOnSubmit
        textAlignVertical='top'
      />
  )
}


export default MultiLineInput

const styles = StyleSheet.create({
    con: {
      fontFamily: 'Rubik-Regular',
      fontSize: fontSizes.small,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.lightGray,
      color: colors.gray,
      padding: '4%',
      margin: '5%',
      width:"85%",
      height:"50%"
    },
  });
  