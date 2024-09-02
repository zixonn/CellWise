import React, { useState } from 'react';
import { Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import LongButton from '../../components/LongButton';
import CustomInput from '../../components/CustomInput';
import PageBody from '../../util/constants/PageBody';
import CustomText from '../../components/CustomText';
import { useUser } from '../../context/UserContext';
import { colors } from '../../util/constants/Colors';
import { useEffect } from 'react';

const Login = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, logInUser, authError, setAuthError,setTheUser } = useUser();

  return (
    <PageBody white>
      <TouchableOpacity
       style = {{position:"absolute", top:'5%',left:"3%",justifyContent:"center",alignItems:"center"}}
       activeOpacity={0.8} onPress={() => {
        nav.navigate('TabNav',{screen:"Learning Modules"})
        setTheUser(null);
      }}
       > 
        <Icon name = "guest" color = {colors.tangerine} size = {20} type = "zocial" />
        <CustomText color={"tangerine"} margin = "1%" fontFamily={'Rubik-Bold'}>Guest</CustomText>
      </TouchableOpacity>
      <Image source={require('../../assets/images/config/logo.png')} resizeMode='contain' style ={{transform:[{scale:0.45}],margin:"-35%"}} />
      <CustomText margin={'1%'} fontFamily={'Rubik-SemiBold'} fontSize={'XL'}>
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
        marginBottom = {"10%"}
        title='Log in'
        onPress={() => logInUser(email, password,() => {
          nav.navigate("TabNav",{screen:"Learning Modules"})
          setEmail(''); setPassword('');
        })}
      />
      <CustomText  fontFamily={'Rubik-Medium'} color={'lightGray'} marginBottom={"25%"}>
        Don't have an account?   
        <CustomText fontFamily={'Rubik-Medium'} color={'gray'} onPress={() => nav.navigate('Register')}>
        ⠀Register Now
        </CustomText>
      </CustomText>
    </PageBody>
  );
};

export default Login;
