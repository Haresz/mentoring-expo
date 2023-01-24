import React from 'react';
import {Text, View, Button, TextInput, Image} from 'react-native';
import { globalStyle } from '../../globalStyle';
import CustomInput  from '../form/input';
import CustomButton from '../form/button';

const Login = ({ navigation }) => {

  const regHandler = () => {
    navigation.navigate('Registrasi')
  }

  const logHandler = () => {
    navigation.navigate('Dasboard')

  }

  return(
    <View
    style={globalStyle.container}
    >
      <Text style={globalStyle.pageTitle} >
        Form Login
      </Text>
      <Image style={globalStyle.logo} source={require('../../assets/snack-icon.png')} />
      <CustomInput
        placeholder='Masukan Username'
        hiden={false}
      />
      <CustomInput
        placeholder="Masukan Password"
        hiden={true}
      />
      <Text style={{marginVertical: 24}} ></Text>
      <CustomButton title={'Login'} press={logHandler} />
      <Text
        style={{
          marginVertical: 8,
          textAlign: 'center'
        }}
      >
        - or -
      </Text>
      <CustomButton title={'Registrasi'} press={regHandler} />
    </View>
  )
};


export default Login;