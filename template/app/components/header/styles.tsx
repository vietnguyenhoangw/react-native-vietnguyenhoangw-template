/**
 * @author [vietnguyenhoangw]
 * @email [vietnguyenhoangw@gmail.com]
 * @create date 2021-07-20 13:33:24
 * @modify date 2021-07-20 13:33:24
 * @desc [description]
 */
import {Platform, StyleSheet} from 'react-native';

// Themes
import {Metrics, Colors} from '@/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrics.tabBarHeight,
    backgroundColor: 'blue',
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 32,
  },
  iconContainer: {
    width: Metrics.screenWidth / 4.5,
    justifyContent: 'space-between',
    marginHorizontal: Metrics.halfTripleBaseMargin,
    alignContent: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    lineHeight: 24,
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTitle: {
    lineHeight: 18,
    alignSelf: 'center',
  },
  description: {
    alignSelf: 'center',
  },
  titleImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circleNumberView: {
    top: 8,
    right: Platform.OS === 'ios' ? 0 : 2,
    width: Platform.OS === 'ios' ? 19 : 18,
    height: Platform.OS === 'ios' ? 19 : 18,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  circleNumberText: {
    fontSize: Platform.OS === 'ios' ? 10 : 11,
    color: Colors.white,
  },

  // Align title
  titleLeft: {
    alignSelf: 'flex-start',
    paddingHorizontal: Metrics.halfTripleBaseMargin,
  },
  titleRight: {
    alignSelf: 'flex-end',
    paddingHorizontal: Metrics.halfTripleBaseMargin,
  },
});
