/***
 *
 *
 *
 * DEFAULT LOADING COMPONENT
 *
 */
import React from 'react';
import {ActivityIndicator, View} from 'react-native';

// Styles
import styles from './styles';

// Models
import {CDefaultLoadingType} from '@/models';

const CDefaultLoading: React.FC<CDefaultLoadingType> = props => {
  var loadingStyle: any = [];
  if (props.isFullScreen) {
    loadingStyle.push(styles.center);
  }
  if (props.isCoverScreen) {
    loadingStyle.push(styles.cover);
  }

  return (
    <View style={[styles.loadingContainer, loadingStyle, props.containerStyle]}>
      <ActivityIndicator size="small" color={'blue'} />
    </View>
  );
};

export default CDefaultLoading;
