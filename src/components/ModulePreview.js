import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from "../constants/Colors";
import CustomText from "../components/CustomText";
import { useNavigation } from '@react-navigation/native';

const ModulePreview = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      style={[styles.con, props.style]}
      onPress={() => navigation.navigate("ModuleNav", {
        screen: "ArticleList",
        params: { articleCount: props.articleCount }
      })} 
    >
      <CustomText 
        margin={"3%"} 
        fontFamily={"Rubik-Bold"} 
        color={"white"} 
        fontSize={"large"}
      >
        {props.label}
      </CustomText>
    </TouchableOpacity>
  );
};

export default ModulePreview;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.tangerine,
    width: "90%",
    height: "25%",
    borderRadius: 10,
    marginVertical: "2%",
    alignSelf: "center",
    justifyContent: "flex-end"
  }
});
