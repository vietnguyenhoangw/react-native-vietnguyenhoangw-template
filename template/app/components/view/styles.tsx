import {StyleSheet} from 'react-native';

// Themes
import {Colors} from '@/theme';

export default StyleSheet.create({
  containerRoot: {flex: 1, backgroundColor: Colors.white},
  wrap: {flexWrap: 'wrap'},
  center: {justifyContent: 'center', alignItems: 'center'},
  bottomContent: {justifyContent: 'flex-end'},
  leftContent: {justifyContent: 'flex-start'},
  rightContent: {justifyContent: 'flex-end'},
  centerHorizontal: {justifyContent: 'center'},
  centerVertical: {alignItems: 'center'},
  shrink: {flexShrink: 1},
  fillParent: {alignSelf: 'stretch', flex: 1, flexShrink: 1},
  fillWidth: {alignSelf: 'stretch', flexGrow: 1, flexShrink: 1},
  fillHeight: {flex: 1},
});
