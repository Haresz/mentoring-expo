 import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image
} from 'react-native';

const Dasboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
      </ScrollView>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
      </ScrollView>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
        <Image style={styles.img} source={require('../../assets/snack-icon.png')}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  img: {
    height: 100,
    width: 100,
  },
});

export default Dasboard;