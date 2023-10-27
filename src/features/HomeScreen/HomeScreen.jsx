import {
  FlatList,
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../api';
import {styles} from './styles';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import {useNavigation} from '@react-navigation/native';
import ProductItemComponent from '../../components/ProductItemProductItemComponent/ProductItemComponent';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const getData = async () => {
    try {
      const res = await getRequest(
        `elastic?limit=20&p=${page}&q=${searchText}&&world=de`,
      );
      if (res.status === 'success') {
        if (!searchText) {
          setTotalItems(res?.data?.total);
          setData([...new Set([...data, ...res?.data?.items.materials])]);
        } else {
          setTotalItems(res?.data?.total);
          if (isLoadMore) {
            setData([...new Set([...data, ...res?.data?.items.materials])]);
          } else {
            setData([...new Set([...res?.data?.items.materials])]);
          }
        }
        setIsLoadMore(false);
      }
    } catch (error) {
      console.warn('Error getData', error);
    }
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => navigation.navigate('ProductDetails', {item})}>
       <ProductItemComponent item={item}/>
      </Pressable>
    );
  };

  useEffect(() => {
    getData();
  }, [page, searchText]);

  const loadMoreData = () => {
    if (data.length < totalItems) {
      setPage(prevState => prevState + 1);
      setIsLoadMore(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerWrapper}>
          <SearchComponent
            value={searchText}
            onChange={text => {
              setPage(0);
              setSearchText(text);
            }}
            placeholder={'Nach Material oder Author*innen suchen'}
          />
          {data.length ? (
            <FlatList
              data={data}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.itemsContainer}
              initialNumToRender={10}
              keyboardShouldPersistTaps="handled"
              keyExtractor={(_item, index) => index}
              onEndReached={loadMoreData}
              onEndReachedThreshold={0.5}
            />
          ) : (
            <Text style={styles.noData}>{'Nothing to show :('}</Text>
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
