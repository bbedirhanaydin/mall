import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const OfferList = (props: any) => {
  return <Image style={styles.image} source={{uri: props.content.image}} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    margin: 5,
    borderWidth: 0.8,
    borderColor: '#DFDFDF',
  },
});

export default OfferList;
