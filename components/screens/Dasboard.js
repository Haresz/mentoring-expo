import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { globalStyle } from '../../globalStyle';
import CustomCard from '../layout/card';
import CustomCardBox from '../layout/cardBox';

const Dasboard = ({navigation}) => {
  const listHandler = () => {
    navigation.navigate('List')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: '#eeee' }}>
        <Image
          style={{ height: 30, width: 30, marginHorizontal: 20 }}
          source={require('../../assets/snack-icon.png')}
        />
        <Text>Halo, User</Text>
      </Appbar.Header>
      <ScrollView
        style={globalStyle.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </ScrollView>
      <View style={{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between'
        }}>
        <View>
          <CustomCardBox
            title={'DETAIL DATA'}
            icon={'ios-american-football'} 
            onPress={listHandler}
          />
          <CustomCardBox
            title={'MENU 2'}
            icon={'ios-american-football'} 
          />
          <CustomCardBox
            title={'MENU 3'}
            icon={'ios-american-football'} 
          />
          
        </View>
        <View>
          <CustomCardBox
            title={'MENU 4'}
            icon={'ios-american-football'} 
          />
          <CustomCardBox
            title={'MENU 5'}
            icon={'ios-american-football'} 
          />
          <CustomCardBox
            title={'MENU 6'}
            icon={'ios-american-football'} 
          />
          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // marginVertical: 20,
  },
});

export default Dasboard;
