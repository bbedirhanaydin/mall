import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const ShowList = (props: any) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: props.content.image}} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 80,
    margin: 5,
  },
});

export default ShowList;
