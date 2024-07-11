import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/base';
import LongButton from '../../components/LongButton';
import CustomInput from '../../components/CustomInput';
import PageBody from '../../util/constants/PageBody';
import CustomText from '../../components/CustomText';
import AuthOption from '../../components/AuthOption';
import { colors } from '../../util/constants/Colors';
import { useUser } from '../../context/UserContext';

const Register = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { loading, registerUser, regError, setRegError } = useUser();

  const handleRegister = () => {
    if (password !== passwordConfirm) {
      setRegError("Passwords do not match");
      return;
    }
    if (firstName.length <= 1 || lastName.length <= 1) {
      setRegError("First or last name is too short");
      return;
    }
    registerUser(firstName, lastName, email, password, () => navigation.navigate('TabNav', { screen: 'Learn' }));
  };

  useEffect(() => {
    setRegError('');
  }, [firstName, lastName, email, password, passwordConfirm]);

  return (
    <PageBody white>
      <CustomText marginBottom={'3%'} fontFamily={'Rubik-SemiBold'} fontSize={'XL'}>
        Sign Up
      </CustomText>
      <CustomText color={"tangerine"} fontFamily={'Rubik-Regular'}>{regError}</CustomText>
      <CustomInput maxLength={25} placeholder='First name' value={firstName} onChangeText={setFirstName} />
      <CustomInput maxLength={25} placeholder='Last name' value={lastName} onChangeText={setLastName} />
      <CustomInput maxLength={50} placeholder='Email' value={email} onChangeText={setEmail} />
      <CustomInput maxLength={50} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} />
      <CustomInput maxLength={50} placeholder='Confirm Password' secureTextEntry value={passwordConfirm} onChangeText={setPasswordConfirm} />
      <LongButton
        disabled={(email === "" || password === "" || firstName === "" || lastName === "" || passwordConfirm === "") ? true : false}
        loading={loading}
        margin={'2%'}
        marginBottom={'5%'}
        title='Register'
        onPress={handleRegister}
      />
      <CustomText fontFamily={'Rubik-Medium'} color={'lightGray'} marginBottom={"10%"}>
        Already have an account?
        <CustomText fontFamily={'Rubik-Medium'} color={'tangerine'} onPress={() => navigation.goBack()}>
          {' '}
          ⠀Log in
        </CustomText>
      </CustomText>
    </PageBody>
  );
};

export default Register;
