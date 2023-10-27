import React from 'react';
import ProductItemComponent from '../../components/ProductItemProductItemComponent/ProductItemComponent';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Pressable, SafeAreaView, View, Text, ScrollView} from 'react-native';
import {styles} from './styles';

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const {
    params: {item},
  } = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWrapper}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <Text style={styles.goBackButtonText}>{'Back'}</Text>
        </Pressable>
        <ScrollView style={{flex: 1}}>
        <ProductItemComponent item={item} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
