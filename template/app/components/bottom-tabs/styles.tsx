/**
 * @author [vietnguyenhoangw]
 * @email [vietnguyenhoangw@gmail.com]
 * @create date 2021-07-19 16:29:31
 * @modify date 2021-07-19 16:29:31
 * @desc [description]
 */
import {StyleSheet} from 'react-native';

// theme
import {Colors, Metrics} from '@/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: Metrics.halfTripleBaseMargin,
    backgroundColor: Colors.white,
    paddingBottom: Metrics.baseMargin,
    borderTopWidth: 0.5,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.smallMargin,
    tintColor: Colors.black,
  },
  iconActive: {
    width: 24,
    height: 24,
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.smallMargin,
    tintColor: 'red',
  },
  title: {
    fontSize: 10,
    color: Colors.black,
  },
  titleActive: {
    fontSize: 10,
    color: 'red',
  },
});
