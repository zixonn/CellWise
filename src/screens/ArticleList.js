import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import PageBody from '../constants/PageBody';
import { colors } from '../constants/Colors';
import CustomText from '../components/CustomText';

const ArticleList = ({ route, navigation }) => {
  
  const { articleInfo } = route.params;

  return (
    <PageBody>
      <View style = {styles.titleCon}>
      {
          articleInfo.titles.map((title) =>
            <TouchableOpacity style = {{padding:"3%", alignSelf:"flex-start",borderTopWidth:1,width:"100%",borderColor:colors.lightGray}}>
              <CustomText alignSelf={"flex-start"} color = {"gray"} fontFamily={"Rubik-Regular"}>
                {title}
              </CustomText>
            </TouchableOpacity>
        )
      }
      </View>
    </PageBody>
  );
};

export default ArticleList;

const styles = StyleSheet.create({
  titleCon:{
    width:'100%',
    marginHorizontal:"10%",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    top:"5%",
    borderBottomWidth:1,
    borderBottomColor:colors.lightGray
  }
});
