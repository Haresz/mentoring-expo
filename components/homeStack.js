import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Registrasi from './screens/Registrasi';
import Dasboard from './screens/Dasboard';
import Splash from './screens/Splash';
import List from './screens/List'

const screens = {
  Splash:{
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Dasboard: {
    screen: Dasboard,
    navigationOptions: {
      header: null
    }
  },
  Login:{
    screen: Login
  },
  List:{
    screen: List
  },
  Registrasi:{
    screen: Registrasi,
    navigationOptions: {
      header: null
    }
  },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);