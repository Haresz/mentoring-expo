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

const List = () => {
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

export default List;
