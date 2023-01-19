import React from 'react';
import {Text, View, Button, TextInput, Image} from 'react-native';
import {globalStyle} from '../../globalStyle';
import CustomInput from '../form/input';
import CustomButton from '../form/button';

const Registrasi = ({ navigation }) => {

  const backHandler = () => {
    navigation.goBack()
    alert('registrasi berhasil')
  }

  return (
    <View style={globalStyle.container} >
      <Text style={globalStyle.pageTitle} >
        Form Registrasi
      </Text>
      <Image style={globalStyle.logo} source={require('../../assets/snack-icon.png')} />
      <CustomInput
        placeholder="Email"
        type='email'
      />
      <CustomInput
        placeholder="Username"
      />
      <CustomInput
        placeholder="Password"
        hiden={true}
      />
      <CustomInput
        placeholder="Confirm password"
        hiden={true}
      />
      <Text style={{marginVertical: 10}} />
      <CustomButton title={"Submit"} press={backHandler} />
    </View>
  )
};

export default Registrasi;