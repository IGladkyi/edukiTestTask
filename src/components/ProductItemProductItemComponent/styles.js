import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import {screenHeight} from '../../utils/screenModeChecker';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  square: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.lightGray,
    height: 300,
    width: '100%',
    position: 'absolute',
    top: 150,
  },
  image: {
    width: '80%',
    height: 400,
    backgroundColor: colors.lightGray,
    alignSelf: 'center',
  },
  imageLandscape: {
    width: '30%',
    height: screenHeight / 3,
    backgroundColor: colors.lightGray,
    alignSelf: 'flex-start',
  },
  textContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.lightGray,
    width: 'auto',
  },
  textContainerLandscape: {
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingHorizontal: 16,
    width: '50%',
  },
  title: {
    fontFamily: fonts.InterBold,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    color: colors.black,
  },
  publicName: {
    fontFamily: fonts.InterRegular,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: colors.black,
    marginTop: 10,
    marginBottom: 20,
  },
  price: {
    fontFamily: fonts.InterBold,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    color: colors.black,
    marginBottom: 15,
  },
});
