/**
 * @author [vietnguyenhoangw]
 * @email [vietnguyenhoangw@gmail.com]
 * @create date 2021-08-19 16:53:35
 * @modify date 2021-08-19 16:53:35
 * @desc [description]
 */
import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '@/theme';

export default StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  post: {
    width: '100%',
    height: Metrics.screenHeight / 3,
    backgroundColor: Colors.black,
  },
  text: {
    alignSelf: 'center',
    padding: 13,
    fontSize: 16,
    color: 'white',
  },
  footer: {
    backgroundColor: '#rgba(225, 225, 225, 0.0)',
  },
  header: {
    margin: Metrics.baseMargin,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
});
