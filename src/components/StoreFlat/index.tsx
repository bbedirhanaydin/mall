import React from 'react';
import {FlatList, View, Text, Pressable, StyleSheet} from 'react-native';
import StoreList from '../StoreList';

type ItemData = {
  id: number;
  image: string;
};

const DATA: ItemData[] = [
  {
    id: 1,
    image:
      'https://images.migrosone.com/sanalmarket/category/list/72310/m-beyaz-logo-360x360-953bab-360x360.png',
  },
  {
    id: 2,
    image:
      'https://images.migrosone.com/sanalmarket/category/list/72310/m-beyaz-logo-360x360-953bab-360x360.png',
  },
  {
    id: 3,
    image:
      'https://images.migrosone.com/sanalmarket/category/list/72310/m-beyaz-logo-360x360-953bab-360x360.png',
  },
  {
    id: 4,
    image:
      'https://images.migrosone.com/sanalmarket/category/list/72310/m-beyaz-logo-360x360-953bab-360x360.png',
  },
  {
    id: 5,
    image:
      'https://images.migrosone.com/sanalmarket/category/list/72310/m-beyaz-logo-360x360-953bab-360x360.png',
  },
  {
    id: 6,
    image:
      'https://images.migrosone.com/sanalmarket/category/list/72310/m-beyaz-logo-360x360-953bab-360x360.png',
  },
  {
    id: 7,
    image:
      'https://images.migrosone.com/sanalmarket/category/list/72310/m-beyaz-logo-360x360-953bab-360x360.png',
  },
  {
    id: 8,
    image:
      'https://images.migrosone.com/sanalmarket/category/list/72310/m-beyaz-logo-360x360-953bab-360x360.png',
  },
];

const StoreFlat = () => {
  const storeRender = (props: any) => {
    return <StoreList content={props.item} />;
  };
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.text}>Mağazalar</Text>
        <Pressable>
          <Text style={styles.textLink}>tüm liste</Text>
        </Pressable>
      </View>
      <FlatList data={DATA} renderItem={storeRender} horizontal />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  textLink: {
    color: 'red',
  },
});

export default StoreFlat;
