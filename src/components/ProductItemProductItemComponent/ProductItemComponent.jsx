import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import FastImage from 'react-native-fast-image';

const ProductItemComponent = ({item}) => (
    <View style={styles.container}>
    <View style={styles.square} />
    <FastImage
      source={{uri: item?.firstPreviewImage?.watermarked}}
      style={styles.image}
    />
    
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.publicName}>
        {item.author.details.publicName}
      </Text>
      <Text style={styles.price}>{item.price} €</Text>
    </View>
    </View>
  )

export default ProductItemComponent;