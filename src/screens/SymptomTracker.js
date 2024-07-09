import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import PageBody from '../util/constants/PageBody';
import CusomText from "../components/CustomText"
import { useUser } from '../context/UserContext';
import CustomText from '../components/CustomText';

const SymptomTracker = ({navigation}) => {
  const {user} = useUser();
  //MUST BE LOGGED IN TO USE, IMPLEMENT LATER
  return (
    <PageBody white>
      {user == null ?
      <>
        <CusomText fontSize={"small"} fontFamily={"Rubik-SemiBold"} color={"gray"}>You must be logged in to use this feature.</CusomText>
        <Button title='Log in' onPress={() => navigation.navigate("AuthNav")} />
      </>
       : 
       <>
        <CustomText>UID: {user.uid}</CustomText>
       </> 
       }
    </PageBody>
  );
};

export default SymptomTracker ;

const styles = StyleSheet.create({});


