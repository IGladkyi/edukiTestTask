import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 42,
    backgroundColor: colors.whiteSmoke,
    paddingLeft: 18,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
  focused: {
    borderColor: colors.glacier,
  },
  searchIconContainer: {
    position: 'absolute',
    backgroundColor: colors.glacier,
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
});
