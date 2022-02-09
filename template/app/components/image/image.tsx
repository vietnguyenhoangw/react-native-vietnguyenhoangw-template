/***
 *
 *
 *
 * IMAGE
 *
 * FEATURE AND USED:
 * Video and image slide component can show image and video at the same list.
 * This component has been configured video player and press image (for view full image or more...)
 *
 * *** LOGIC NOTICED:
 *
 */
import React from 'react';
import {Image, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// Models
import {CImageType} from '@/models';

// Utils
import {isUrl} from '@/utils';

// Theme
import {Images} from '@/theme';

const CImage: React.FC<CImageType> = ({source, styles, resizeMode}) => {
  const [urlError, setUrlError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loadingOn = (): void => setIsLoading(true);

  const loadingOff = (): void => setIsLoading(false);

  const buildLoading = (): object => {
    return (
      <View style={styles.loadingContainer}>
        <SkeletonPlaceholder speed={900}>
          <View style={styles} />
        </SkeletonPlaceholder>
      </View>
    );
  };

  return (
    <View>
      {isLoading && !urlError && buildLoading()}
      {typeof source === 'string' && isUrl(source) ? (
        <FastImage
          source={{uri: urlError ? Images.EmptyImage : source}}
          style={styles}
          resizeMode={resizeMode ? resizeMode : 'contain'}
          onError={() => {
            setUrlError(true);
          }}
          onLoadStart={loadingOn}
          onLoadEnd={loadingOff}
        />
      ) : (
        <Image
          source={
            typeof source === 'string'
              ? {uri: urlError ? Images.EmptyImage : source}
              : source
          }
          resizeMode={resizeMode ? resizeMode : 'contain'}
          style={styles}
          onError={() => {
            setUrlError(true);
          }}
        />
      )}
    </View>
  );
};

export default CImage;
