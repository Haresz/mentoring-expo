import react from 'react';
import {TextInput} from 'react-native';
import { globalStyle } from '../../globalStyle'

const CustomInput = (props) => {
  return (
    <TextInput
        style={globalStyle.textInput}
        placeholder={props.placeholder}
        secureTextEntry={props.hiden}
        keyboardType={props.type}
    />
  );
};

export default CustomInput;