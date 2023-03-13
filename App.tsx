import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import FixedImage from './src/components/FixedImage';
import OfferFlat from './src/components/OfferFlat';
import ShowFlat from './src/components/ShowFlat';
import ShowList from './src/components/ShowList';
import StoreFlat from './src/components/StoreFlat';

const App = () => {
  const showRender = (props: any) => {
    return <ShowList content={props.item} />;
  };

  return (
    <SafeAreaView style={styles.container} >
         <ScrollView>
        <View>
          <Text style={styles.text}>ALIŞVERİŞ MERKEZİ</Text>
        </View>
        <FixedImage />
        <ShowFlat />
        <StoreFlat />
        <OfferFlat/>
    </ScrollView>
    </SafeAreaView>
 
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default App;
