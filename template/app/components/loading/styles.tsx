import {StyleSheet} from 'react-native';

// Theme
import {Metrics} from '@/theme';

export default StyleSheet.create({
  loadingContainer: {
    margin: Metrics.halfTripleBaseMargin,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  cover: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1000,
    margin: 0,
  },
});
