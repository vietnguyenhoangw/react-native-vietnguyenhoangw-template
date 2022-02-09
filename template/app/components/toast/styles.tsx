import {StyleSheet} from 'react-native';

// Themes
import {Colors} from '@/theme';

export default StyleSheet.create({
  rootContainer: {
    zIndex: 1000,
  },
  container: {
    paddingHorizontal: 40,
    borderRadius: 60,
    marginHorizontal: 40,
    zIndex: 1000,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
  },
});
