import {StyleSheet} from 'react-native';

// Themes
import {Colors, Metrics} from '@/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  modal: {
    flexGrow: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  indicatorImage: {
    alignSelf: 'center',
    margin: Metrics.baseMargin + 2,
  },
});
