import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const StoreList = (props: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.content.image}} />
      <View style={styles.text}>
        <Text>Migros</Text>
        <Text>Zemin Kat</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    margin: 5,
    borderWidth: 0.8,
    borderColor: '#DFDFDF',
  },
  image: {
    width: 120,
    height: 80,
    margin: 5,
  },
  text: {
    alignItems: 'center',
  },
});

export default StoreList;
