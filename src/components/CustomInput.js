import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { colors } from '../util/constants/Colors';
import { fontSizes } from '../util/constants/FontSizes';

const CustomInput = (props) => {
  return (
    <TextInput  
      onSubmitEditing={props.onSubmitEditing}
      textContentType="none"
      autoCorrect={false}
      maxLength={props.maxLength}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor={colors.lightGray}
      style={styles.con}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  con: {
    fontFamily: 'Rubik-Regular',
    fontSize: fontSizes.small,
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingHorizontal: '3%',
    color: colors.gray,
    margin: '2%',
    width:"85%",
    padding:"3%"
  },
});
