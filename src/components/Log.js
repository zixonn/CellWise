import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const Log = (props) => {
  return (
    <View style={styles.con}>
      <CustomText fontFamily={"Rubik-Medium"} color={"black"} margin={"2.5%"} fontSize={"medium"}>
        {props.date}
      </CustomText>
      <CustomText fontFamily={"Rubik-Regular"} color={"black"} marginHorizontal={"3%"}  fontSize={"small"}>
        {props.description}
      </CustomText>
      <View style={styles.bottomHalf}>
        <CustomText alignSelf={"flex-end"} fontFamily={"Rubik-Medium"} color={"gray"}>
          {props.time}
        </CustomText>
        <TouchableOpacity onPress={props.onDelete}>
          <CustomText fontFamily={"Rubik-Medium"} color={"tangerine"}>Delete</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Log;

const styles = StyleSheet.create({
  con: {
    width: "90%",
    padding:"2%"
  },
  bottomHalf: {
    width: '100%',
    padding: "3%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


