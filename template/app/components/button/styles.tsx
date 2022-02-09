/**
 * @author [vietnguyenhoangw]
 * @email [vietnguyenhoangw@gmail.com]
 * @create date 2021-07-23 06:25:26
 * @modify date 2021-07-23 06:25:26
 * @desc [description]
 */
import {StyleSheet} from 'react-native';

// Themes
import {Colors, Metrics, primaryButtonTheme} from '@/theme';


export default StyleSheet.create({
  container: {
    height: Metrics.buttonHeight,
    justifyContent: 'center',
    ...primaryButtonTheme.background
  },
  btnTitle: {
    alignSelf: 'center',
    ...primaryButtonTheme.title
  },
  icon: {
    alignSelf: 'center',
    borderRadius: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnAboveIcon: {
    marginBottom: Metrics.smallMargin + 2,
  },
  btnLeftIcon: {
    marginRight: Metrics.halfTripleBaseMargin,
  },
  btnRightIcon: {
    marginLeft: Metrics.halfTripleBaseMargin,
  },
  btnBelowIcon: {
    marginTop: Metrics.smallMargin + 2,
  },

  blackTitle: {color: 'black'},
  whiteTitle: {color: 'white'},

  /**LINK BUTTON */
  btnLink: {
    backgroundColor: Colors.transparent,
    color: Colors.black,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});
