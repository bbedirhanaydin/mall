import React from 'react';
import {FlatList, View, Text, Pressable, StyleSheet} from 'react-native';
import OfferList from '../OfferList';
import ShowList from '../ShowList';

type ItemData = {
  id: number;
  image: string;
};

const DATA: ItemData[] = [
  {
    id: 1,
    image:
      'https://www.hacialioglucigkofte.com/wp-content/uploads/2015/12/cigkofte-kampanya-32.jpg',
  },
  {
    id: 2,
    image:
      'https://www.hacialioglucigkofte.com/wp-content/uploads/2015/12/cigkofte-kampanya-32.jpg',
  },
  {
    id: 3,
    image:
      'https://www.hacialioglucigkofte.com/wp-content/uploads/2015/12/cigkofte-kampanya-32.jpg',
  },
  {
    id: 4,
    image:
      'https://www.hacialioglucigkofte.com/wp-content/uploads/2015/12/cigkofte-kampanya-32.jpg',
  },
  {
    id: 5,
    image:
      'https://www.hacialioglucigkofte.com/wp-content/uploads/2015/12/cigkofte-kampanya-32.jpg',
  },
  {
    id: 6,
    image:
      'https://www.hacialioglucigkofte.com/wp-content/uploads/2015/12/cigkofte-kampanya-32.jpg',
  },
  {
    id: 7,
    image:
      'https://www.hacialioglucigkofte.com/wp-content/uploads/2015/12/cigkofte-kampanya-32.jpg',
  },
  {
    id: 8,
    image:
      'https://www.hacialioglucigkofte.com/wp-content/uploads/2015/12/cigkofte-kampanya-32.jpg',
  },
];

const OfferFlat = () => {
  const offerRender = (props: any) => {
    return <OfferList content={props.item} />;
  };
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.text}>Kampanyalar</Text>
        <Pressable>
          <Text style={styles.textLink}>tüm liste</Text>
        </Pressable>
      </View>
      <FlatList data={DATA} renderItem={offerRender} horizontal />
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

export default OfferFlat;
