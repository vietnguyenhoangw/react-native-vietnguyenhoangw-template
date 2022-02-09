/**
 * platform/application wide metrics for proper styling
 */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  smallMargin: 4,
  baseMargin: 8,
  halfTripleBaseMargin: 16,
  doubleBaseMargin: 24,
  halfQuintupleBaseMargin: 32,
  tripleBaseMargin: 40,
  quadrupleBaseMargin: 48,
  quintupleBaseMargin: 56,
  tabBarHeight: 64,
  buttonHeight: 52,
};

export default Metrics;
