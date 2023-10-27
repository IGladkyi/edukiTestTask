import {Pressable, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import colors from '../../assets/colors';
import {styles} from './styles';
import SearchIcon from '../../assets/Icons/SearchIcon';

const SearchComponent = ({value, onChange, placeholder, rest}) => {
  const textInput = useRef();
  const [onFocus, setOnFocus] = useState(false);

  return (
    <View>
      <TextInput
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => setOnFocus(false)}
        ref={textInput}
        style={[styles.input, onFocus && styles.focused]}
        onChangeText={onChange}
        placeholderTextColor={colors.shadesOfGray}
        value={value}
        placeholder={placeholder}
        keyboardAppearance="light"
        {...rest}
      />
      <Pressable
        onPress={() => textInput.current?.focus()}
        style={styles.searchIconContainer}>
        <SearchIcon />
      </Pressable>
    </View>
  );
};

export default SearchComponent;
