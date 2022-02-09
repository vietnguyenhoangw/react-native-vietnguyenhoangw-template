/***
 *
 *
 *
 * LINEAR GRADIENT COLOR COMPONENT
 * Read more and get example: https://www.npmjs.com/package/react-native-linear-gradient
 *
 */
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Styles
import styles from './styles';

// Themes
import {Colors} from '@/theme';

export interface Props {
  gradientColors?: (string | number)[];
  containerStyle?: StyleProp<ViewStyle> | undefined;
  renderContent: any;
}

const CLinearGradient: React.FC<Props> = props => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 2, y: 0}}
      colors={
        props.gradientColors
          ? props.gradientColors
          : [Colors.black, Colors.white]
      }
      style={[styles.container, props.containerStyle]}>
      {props.renderContent()}
    </LinearGradient>
  );
};

export default CLinearGradient;
