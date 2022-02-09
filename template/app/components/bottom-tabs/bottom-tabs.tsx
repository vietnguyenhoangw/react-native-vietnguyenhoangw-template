/***
 *
 *
 *
 * BOTTOM TAB
 *
 * This is custom component use in tab-bar navigation.
 *
 */
import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';

// Components
import {CImage} from '../image';
import {CText} from '../text';

// Styles
import styles from './styles';

// Theme
import {Colors, Images} from '@/theme';

function CBottomTabs({state}: any) {
  const {currentIndex} = state;

  const onPressHomeTab = (index: number): any => {
    switch (index) {
      case 0:
        console.log('On press home');
        break;
      default:
        break;
    }
  };

  const checkActive = (index: number): any => {
    if (currentIndex === index) {
      return {
        iconActive: styles.iconActive,
        titleActive: styles.titleActive,
      };
    } else {
      return {
        iconActive: styles.icon,
        titleActive: styles.title,
      };
    }
  };

  const buildBottomBtn = (
    index: number,
    title: String,
    onPress: () => void,
    icon: any,
  ): object => {
    return (
      <TouchableOpacity style={styles.tabButton} onPress={onPress}>
        <CImage source={icon} styles={checkActive(index).iconActive} />
        <CText text={title} style={checkActive(index).titleActive} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.white}}>
      <View style={styles.container}>
        {buildBottomBtn(
          0,
          'Home',
          () => onPressHomeTab(0),
          Images.HidePasswordEyes,
        )}
      </View>
    </SafeAreaView>
  );
}

// const forwardInput = React.forwardRef(KTabBar);
export default CBottomTabs;
