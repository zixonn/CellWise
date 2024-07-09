import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import PageBody from '../util/constants/PageBody';
import CusomText from "../components/CustomText"
import { useUser } from '../context/UserContext';

const Volunteer = ({navigation}) => {
  const {user} = useUser();
  return (
    <PageBody white>
      {user == null ?
      <>
        <CusomText fontSize={"small"} fontFamily={"Rubik-SemiBold"} color={"gray"}>You must be logged in to use this feature.</CusomText>
        <Button title='Log in' onPress={() => navigation.navigate("AuthNav")} />
      </>
       : null}
    </PageBody>
  );
};

export default Volunteer;

const styles = StyleSheet.create({});
