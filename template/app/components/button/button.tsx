/**
 *
 *
 * BUTTON COMPONENT
 *
 * **** FEATURE AND USED:
 *
 * Button with every style:
 * - left icon
 * - right icon
 * - bottom icon
 * - above icon
 *
 * We can also add more style for each element in this component
 * like icon, text, container button, ect...
 *
 * *** LOGIC NOTICED:
 *
 */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

// Styles
import styles from './styles';

// Components
import {CText} from '../text';
// import {CImage} from '../';

// Models
import {CButtonType} from '@/models';
import {CImage} from '../image';

const KButton: React.FC<CButtonType> = props => {

  const {
    isLinkBtn = false,
    titleBlack = false,
    titleWhite = false,
  } = props;

  const btnStyle = [
    isLinkBtn ? styles.btnLink : null,
  ];

  const btnTitleStyle = [
    titleBlack ? styles.blackTitle : {},
    titleWhite ? styles.whiteTitle : {}
  ]

  const buildIcon = (srcIcon: any, style: any) => {
    return (
      <CImage
        resizeMode={'cover'}
        source={srcIcon}
        styles={[styles.icon, style]}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={() => (props.onPress ? props.onPress() : {})}
      style={[styles.container, btnStyle, props.containerStyle]}>
      {props.aboveIcon &&
        buildIcon(props.aboveIcon, [styles.btnAboveIcon, props.aboveIconStyle])}
      <View style={styles.titleContainer}>
        {props.leftIcon &&
          buildIcon(props.leftIcon, [styles.btnLeftIcon, props.leftIconStyle])}
        {props.btnTitle && (
          <CText
            text={props.btnTitle}
            style={[styles.btnTitle, btnStyle, btnTitleStyle, props.titleStyle]}
          />
        )}
        {props.rightIcon &&
          buildIcon(props.rightIcon, [
            styles.btnRightIcon,
            props.rightIconStyle,
          ])}
      </View>
      {props.belowIcon &&
        buildIcon(props.belowIcon, [styles.btnBelowIcon, props.rightIconStyle])}
    </TouchableOpacity>
  );
};

export default KButton;
