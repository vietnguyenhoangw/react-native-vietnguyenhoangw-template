import {StyleSheet} from 'react-native';

// themes
import {Metrics, Colors} from '@/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  textInputContainer: {
    flexDirection: 'row',
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: Metrics.halfTripleBaseMargin - 4,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  textInput: {
    flex: 1,
    height: 48,
    color: Colors.black,
  },
  iconPress: {
    justifyContent: 'center',
  },
  icon: {
    height: 40,
    width: 40,
  },
});
