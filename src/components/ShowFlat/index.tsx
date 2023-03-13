import React from 'react';
import {FlatList, View, Text, Pressable, StyleSheet} from 'react-native';
import ShowList from '../ShowList';

type ItemData = {
  id: number;
  image: string;
};

const DATA: ItemData[] = [
  {
    id: 1,
    image:
      'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
  },
  {
    id: 2,
    image:
      'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
  },
  {
    id: 3,
    image:
      'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
  },
  {
    id: 4,
    image:
      'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
  },
  {
    id: 5,
    image:
      'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
  },
  {
    id: 6,
    image:
      'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
  },
  {
    id: 7,
    image:
      'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
  },
  {
    id: 8,
    image:
      'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
  },
];

const ShowFlat = () => {
  const showRender = (props: any) => {
    return <ShowList content={props.item} />;
  };
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.text}>Moi Sahne</Text>
        <Pressable>
          <Text style={styles.textLink}>tüm liste</Text>
        </Pressable>
      </View>
      <FlatList data={DATA} renderItem={showRender} horizontal />
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

export default ShowFlat;
