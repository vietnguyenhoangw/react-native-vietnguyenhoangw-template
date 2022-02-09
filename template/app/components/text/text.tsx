/**
 *
 *
 *
 *
 * *** FEATURE AND USED:
 *
 * Common text using in app.
 *
 * Do not use the native Text component for add text because
 * We will style everything relate to text in this custom component
 * like font, size, align...
 *
 * *** LOGIC NOTICED:
 *
 */
import React from 'react';
import {Text} from 'react-native';

// Styles
import styles from './styles';

// Models
import {CTextType} from '@/models';

// Themes
import { primaryTextTheme } from '@/theme';

const CText: React.FC<CTextType> = props => {
  const {
    color = null,
    size = null,
    align = null,

    h1 = false,
    h2 = false,
    h3 = false,
    h4 = false,

    bold = false,
  } = props


  var textStyle = [
    color ? {color: props.color} : {},
    size ? {fontSize: props.size} : {},
    align ? {alignSelf: props.align} : {},

    h1 ? {fontSize: 32} : {},
    h2 ? {fontSize: 24} : {},
    h3 ? {fontSize: 16} : {},
    h4 ? {fontSize: 8} : {},

    bold ? {fontWeight: 'bold'} : {},

    props.style,
  ];

  return (
    <Text
      style={[styles.defaultText, primaryTextTheme , textStyle]}
      numberOfLines={props.numberOfLines && props.numberOfLines}>
      {props.text ?? 'null'}
    </Text>
  );
};

export default CText;
