import {Platform, StatusBar} from 'react-native';
import {useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';
import ImagePicker from 'react-native-image-crop-picker';

/** Check string is url or not. */
export const isUrl = (string: String) => {
  const regex = /^((http|https|ftp):\/\/)/;
  return regex.test(string.toString());
};

/** Check previous value of state or props. */
export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

/** Show network loading indicator on status bar ios. */
export const useNetworkActivityStatusBar = (isVisible = false) => {
  if (Platform.OS === 'ios') {
    return StatusBar.setNetworkActivityIndicatorVisible(isVisible);
  }
};

/** Storage key - value in local storage. */
export const storeLocalData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(
      `Have error in save data to local storage with key: ${key} / ${e}`,
    );
  }
};

/** Read key - value in local storage. */
export const getLocalData = async (key: string, isJson: boolean) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (!isJson) {
      return jsonValue;
    } else {
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
  } catch (e) {
    console.log(
      `Have error in get data from local storage with key: ${key} / ${e}`,
    );
  }
};

/** Copy string value to system's clipboard. */
export const copyToClipboard = (text: string) => {
  Clipboard.setString(text);
};

/** Image picker using this one with permission features. */
export const handleImagePicker = (config: any) => {
  return ImagePicker.openPicker({
    width: config.width,
    height: config.height,
    cropping: true,
    compressImageMaxWidth: config.width,
    compressImageMaxHeight: config.height,
    compressImageQuality: 1,
    forceJpg: true,
  });
};

/**
 * Crop image
 * Read more example and properties: https://github.com/ivpusic/react-native-image-crop-picker
 *  */
export const handleCropImage = (path: any, props?: any) => {
  return ImagePicker.openCropper({
    path: path,
    ...props,
  });
};
