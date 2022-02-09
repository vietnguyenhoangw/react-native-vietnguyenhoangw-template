/**
 * @author [vietnguyenhoangw]
 * @email [vietnguyenhoangw@gmail.com]
 * @create date 2021-07-29 14:05:25
 * @modify date 2021-07-29 14:05:25
 * @desc [description]
 */
import {StyleSheet, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

// themes
import {Colors, Metrics} from '@/theme';

const isIPhoneX = DeviceInfo.hasNotch();
export default StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
  },
  btnText: {
    alignSelf: 'center',
  },
  pagingDotContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  image: {
    width: Metrics.screenWidth,
    height: !isIPhoneX ? Metrics.screenHeight / 3.2 : Metrics.screenHeight / 4,
  },
  container: {
    width: Metrics.screenWidth,
    borderRadius: Metrics.baseMargin,
    alignSelf: 'center',
  },
  imageContainer: {
    // backgroundColor: Colors.grey01,
    width: Metrics.screenWidth,
    justifyContent: 'center',
  },
  playBtn: {
    position: 'absolute',
    alignSelf: 'center',
    width: 60,
    height: 60,
  },
});
