import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import ImageView from 'react-native-image-viewing';

// Styles
import styles from './styles';

// Components
import {CScreenHeader} from '../header';

// Models
import {CViewImageType} from '@/models';

// Themes
import {Images} from '@/theme';

const CViewImage: React.FC<CViewImageType> = props => {
  // States
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const buildHeader = (): any => {
    return (
      <CScreenHeader
        leftIcon1Src={Images.X}
        containerStyle={styles.header}
        iconStyle={styles.headerIcon}
        onLeftIcon1Press={props.onPressCloseImage}
      />
    );
  };

  const buildFooter = (): any => {
    return (
      <View style={styles.footer}>
        <Text
          style={
            styles.text
          }>{`${currentIndex} / ${props?.imageList?.length}`}</Text>
      </View>
    );
  };

  const onImageIndexChange = (index: number): any => setCurrentIndex(index + 1);

  const keyExtractor = useCallback(
    (item, index) => index + item.toString(),
    [],
  );

  return (
    <View style={[props.containerStyle]}>
      <ImageView
        images={props.imageList}
        imageIndex={Boolean(props.selectedIndex) ? props.selectedIndex : 0}
        visible={props.visible}
        onRequestClose={props.onPressCloseImage}
        swipeToCloseEnabled={false}
        FooterComponent={() => buildFooter()}
        HeaderComponent={() => buildHeader()}
        onImageIndexChange={onImageIndexChange}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default CViewImage;
