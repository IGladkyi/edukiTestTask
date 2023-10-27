import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerWrapper: {
    paddingHorizontal: 16,
  },
  itemsContainer: {
    marginTop: 20,
    paddingBottom: 20,
  },
  itemContainer: {
    marginBottom: 50,
  },
  noData: {
    fontFamily: fonts.InterRegular,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    color: colors.black,
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
