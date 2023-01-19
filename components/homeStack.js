import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Registrasi from './screens/Registrasi';
import Dasboard from './screens/Dasboard';

const screens = {
  Login:{
    screen: Login
  },
  Registrasi:{
    screen: Registrasi
  },
  Dasboard: {
    screen: Dasboard
  },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);