/***
 *
 *
 *
 * IMAGE AND VIDEO SLIDER
 *
 * *** FEATURE AND USED:
 * Video and image slide component can show image and video at the same list.
 * This component has been configured video player and press image (for view full image or more...)
 *
 * *** LOGIC NOTICED:
 * - In this component we will store video and image in the same list
 * - After that it will check the url is mp4 or not.
 * - If url is mp4 use cover url to show video's thumbnail else just use the url for show image.
 *
 */

// *** FORMAT DATA
//
// const TEST_DATA = [
//   {
//     url: 'https://images.pexels.com/photos/9941660/pexels-photo-9941660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     url: 'https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     url: 'https://images.pexels.com/photos/10447127/pexels-photo-10447127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     url: 'https://images.pexels.com/photos/10413401/pexels-photo-10413401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//     cover:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Big.Buck.Bunny.-.Frank.Bunny.png/800px-Big.Buck.Bunny.-.Frank.Bunny.png',
//   },
// ];
//

import React, {useState} from 'react';
import {View, VirtualizedList, TouchableOpacity} from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';
import isEmpty from 'lodash/isEmpty';
import VideoPlayer from 'react-native-video-player';

// Styles
import styles from './styles';

// Components
import {CImage} from '../image';

// Themes
import {Colors, Images} from '@/theme';

// Models
import {CMediaSliderType} from '@/models';

const CMediaSlider: React.FC<CMediaSliderType> = ({
  data,
  containerStyle,
  imageStyle,
  pagingDotContainer,
  onPressViewImage,
  isSquareImage,
  resizeMode,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlayVideo, setIsPlayVideo] = useState<boolean>(false);

  const renderEmptyImage = () => {
    return isSquareImage ? Images.EmptyImage : Images.EmptyImageLarge;
  };

  const renderItem = (item: any) => {
    const isMp4 = item?.item?.url
      ?.slice(item?.item?.url?.length - 4)
      ?.includes('mp4');

    const imagePath = isMp4 ? item?.item?.cover : item?.item?.url;
    const videoPath = item?.item?.url;

    return !isMp4 ? (
      <TouchableOpacity
        onPress={() =>
          !isEmpty(onPressViewImage) ? onPressViewImage(item) : {}
        }
        style={styles.imageContainer}>
        <CImage
          styles={[styles.image, imageStyle]}
          source={isEmpty(imagePath) ? renderEmptyImage() : imagePath}
          resizeMode={resizeMode}
        />
      </TouchableOpacity>
    ) : (
      <View style={[styles.imageContainer]}>
        <VideoPlayer
          video={{
            uri: videoPath,
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: imagePath}}
          onEnd={() => {
            setIsPlayVideo(false);
          }}
          onPlayPress={() => {
            setIsPlayVideo(!isPlayVideo);
          }}
          onStart={() => {
            setIsPlayVideo(true);
          }}
          showDuration={true}
        />
      </View>
    );
  };

  const onScrollEnd = (e: any) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage(pageNum);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.pagingDotContainer, pagingDotContainer]}>
        {data?.length > 1 && (
          <PaginationDot
            activeDotColor={Colors.black}
            curPage={currentPage}
            maxPage={data ? data.length : 1}
            sizeRatio={1.0}
          />
        )}
      </View>
      <VirtualizedList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
        renderItem={renderItem}
        keyExtractor={(item: any, index: any) => `${item.toString() + index}`}
        data={isEmpty(data) ? [1] : data}
        getItem={(data, index) => data[index]}
        getItemCount={data => (data ? data.length : 0)}
        scrollEnabled={!isPlayVideo}
      />
    </View>
  );
};

export default CMediaSlider;
