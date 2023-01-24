import react from 'react';
import {Button} from 'react-native';
import { globalStyle } from '../../globalStyle'

const CustomButton = (props) => {
  return (
    <Button title={props.title} onPress={props.press} />
  );
};

export default CustomButton;