import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider, Icon } from '@rneui/base';
import LongButton from '../../components/LongButton';
import CustomInput from '../../components/CustomInput';
import PageBody from '../../util/constants/PageBody';
import CustomText from '../../components/CustomText';
import AuthOption from '../../components/AuthOption';
import { colors } from '../../util/constants/Colors';
import { useUser } from '../../context/UserContext';

const Login = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, logInUser, authError, setAuthError } = useUser();

  return (
    <PageBody white>
      <TouchableOpacity
       style = {{position:"absolute", top:'2%',left:"3%",justifyContent:"center",alignItems:"center"}}
       activeOpacity={0.8} onPress={() => nav.navigate('TabNav')}
       > 
        <Icon name = "guest" color = "black" size = {20} type = "zocial" />
        <CustomText margin = "1%" fontFamily={'Rubik-Bold'}>Guest</CustomText>
      </TouchableOpacity>
      <Image source={require('../../assets/images/logo.png')} resizeMode='contain' style ={{transform:[{scale:0.5}],margin:"-30%"}} />
      <CustomText margin={'2.5%'} fontFamily={'Rubik-SemiBold'} fontSize={'XL'}>
        Log In
      </CustomText>
      <CustomText color={"tangerine"} fontFamily={'Rubik-Regular'}>{authError}</CustomText>
      <CustomInput maxLength = {50} placeholder='Email' value={email} onChangeText={setEmail} />
      <CustomInput  maxLength = {50} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} />
      <CustomText marginTop={'2%'} textAlign={'right'} width={'75%'} fontFamily={'Rubik-Medium'} color={'lochmara'}
        onPress={() => { nav.navigate('ForgotPassword')
          setEmail(""); setPassword(""); setAuthError("");
        }}>
        Forgot Password?
      </CustomText>
      <LongButton
        disabled = {(email == "" || password == "" ) ? true : false}
        loading={loading}
        marginTop={'6%'}
        title='Log in'
        onPress={() => logInUser(email, password,() => {
          nav.navigate("TabNav")
          setEmail(''); setPassword('');
        })}
      />
      <CustomText fontSize={'small'} fontFamily={'Rubik-Bold'} color={'gray'} margin={'5%'}>
        or
      </CustomText>
      <Divider width={1} color={colors.lightGray} style={{ width: '85%' }} />
      <View style={{ flexDirection: 'row', gap: '20%', marginTop: '5%', marginBottom: '10%' }}>
        <AuthOption name='google' />
        <AuthOption name='facebook-square' />
        <AuthOption name='apple1' />
      </View>
      <CustomText fontFamily={'Rubik-Medium'} color={'lightGray'}>
        Don't have an account?
        <CustomText fontFamily={'Rubik-Medium'} color={'tangerine'} onPress={() => nav.navigate('Register')}>
          Register Now
        </CustomText>
      </CustomText>
    </PageBody>
  );
};

export default Login;
