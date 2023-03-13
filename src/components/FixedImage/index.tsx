import React from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';

const FixedImage = () => {
  return (
    <Image style={styles.image} source={require('../../assets/fixed.png')} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 3.3,
  },
});

export default FixedImage;
