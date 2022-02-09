import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import isEmpty from 'lodash/isEmpty';

// Components
import {CImage} from '../image';
import {CText} from '../text';

// Styles
import styles from './styles';

// Models
import {CScreenHeaderType} from '@/models';

// Themes
import {primaryHeaderTheme} from '@/theme';

const CScreenHeader: React.FC<CScreenHeaderType> = props => {
  var titleStyle = [];

  if (props.isTitleAlignLeft) {
    titleStyle.push(styles.titleLeft);
  }
  if (props.isTitleAlignRight) {
    titleStyle.push(styles.titleRight);
  }

  const buildBtnIcon = (
    iconSrc: any,
    onPress: any,
    customStyle?: any,
    circleNumber?: string,
  ) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
        {iconSrc && (
          <View style={props.iconContainerStyle}>
            <CImage source={iconSrc} styles={[props.iconStyle, customStyle]} />
          </View>
        )}
        {!isEmpty(circleNumber) &&
          circleNumber !== '0' &&
          circleNumber !== 'undefined' && (
            <View style={styles.circleNumberView}>
              <CText text={circleNumber} style={styles.circleNumberText} />
            </View>
          )}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        primaryHeaderTheme.background,
        props.isDisplayBottomLine && styles.bottomLine,
        props.containerStyle,
      ]}>
      {props.leftIcon1Src ||
        (props.leftIcon2Src && (
          <View style={[styles.container, styles.iconContainer]}>
            {props.leftIcon1Src &&
              buildBtnIcon(
                props.leftIcon1Src,
                props.onLeftIcon1Press,
                props.leftIcon1Style,
              )}
            {props.leftIcon2Src &&
              buildBtnIcon(
                props.leftIcon2Src,
                props.onLeftIcon2Press,
                props.leftIcon2Style,
              )}
          </View>
        ))}
      <View style={styles.titleContainer}>
        {props.title && (
          <CText
            numberOfLines={1}
            text={props.title}
            style={[styles.title, titleStyle, props.titleStyle]}
          />
        )}
        {props.subTitle && (
          <CText
            style={[styles.subTitle, props.subTitleStyle]}
            text={props.subTitle}
          />
        )}
        {props.titleImage && (
          <View style={styles.titleImageContainer}>
            <CImage
              resizeMode="cover"
              source={props.titleImage}
              styles={props.titleImageStyle}
            />
          </View>
        )}
        {props.description && (
          <CText style={styles.description} text={props.description} />
        )}
      </View>
      {props.rightIcon1Src ||
        (props.rightIcon2Src && (
          <View style={[styles.container, styles.iconContainer]}>
            {props.rightIcon1Src &&
              buildBtnIcon(
                props.rightIcon1Src,
                props.onRightIcon1Press,
                props.rightIcon1Style,
                props.numberOfRightIcon1,
              )}
            {props.rightIcon2Src &&
              buildBtnIcon(
                props.rightIcon2Src,
                props.onRightIcon2Press,
                props.rightIcon2Style,
                props.numberOfRightIcon2,
              )}
          </View>
        ))}
    </View>
  );
};

export default CScreenHeader;
