/**
 *
 *
 *
 * Data type constraints for components
 */

import {
  ImageResizeMode,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';

/** ****BASE VIEW */
export interface CBaseViewType {
  containerStyle?: StyleProp<ViewStyle>;
  onLayout?: any;
}

/** ****VIEW */
export interface CViewType {
  children?:
    | JSX.Element
    | JSX.Element[]
    | React.ReactNode
    | React.ReactNodeArray;

  flex?: number;
  row?: boolean;
  col?: boolean;
  center?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
  wrap?: boolean;
  leftContent?: boolean;
  bottomContent?: boolean;
  rightContent?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  fillParent?: boolean;
  shrink?: boolean;

  style?: StyleProp<ViewStyle>;
}

/** ****TEXT */
export interface CTextType {
  text: String | undefined | null;

  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  color?: any;
  size?: any;
  align?: any;

  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;

  bold?: boolean;
}

/** ****BUTTON */
export interface CButtonType {
  btnTitle?: String | undefined | null;
  aboveIcon?: any;
  leftIcon?: any;
  rightIcon?: any;
  belowIcon?: any;

  aboveIconStyle?: StyleProp<ImageStyle>;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  belowIconStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: any;

  titleBlack?: boolean;
  titleWhite?: boolean;

  isLinkBtn?: boolean;
  onPress?: () => void | undefined | null | any;
}

/** ****IMAGE */
export interface CImageType {
  source: any;
  styles: StyleProp<ImageStyle> | any;
  resizeMode?: ImageResizeMode | any;
}

/** ****VIEW IMAGE */
export interface CViewImageType {
  imageList: Array<any>;

  visible: boolean;
  selectedIndex?: number | any;
  onPressCloseImage: () => void;

  containerStyle?: any;
}

/** ****SCREEN HEADER */
export interface CScreenHeaderType {
  title?: String;
  subTitle?: String;
  titleImage?: String;
  description?: String | null;
  leftIcon1Src?: any;
  leftIcon2Src?: any;
  rightIcon1Src?: any;
  rightIcon2Src?: any;

  numberOfRightIcon1?: string;
  numberOfRightIcon2?: string;

  containerStyle?: StyleProp<ViewStyle> | undefined;
  iconContainerStyle?: StyleProp<ViewStyle> | undefined;
  iconStyle?: StyleProp<ImageStyle> | any;
  titleStyle?: StyleProp<TextStyle> | any;
  subTitleStyle?: StyleProp<TextStyle> | any;
  leftIcon1Style?: StyleProp<ImageStyle> | any;
  leftIcon2Style?: StyleProp<ImageStyle> | any;
  rightIcon1Style?: StyleProp<ImageStyle> | any;
  rightIcon2Style?: StyleProp<ImageStyle> | any;
  titleImageStyle?: StyleProp<ImageStyle> | any;

  isDisplayBottomLine?: boolean;
  isTitleAlignLeft?: boolean;
  isTitleAlignRight?: boolean;

  onLeftIcon1Press?: ((event: GestureResponderEvent) => void) | undefined;
  onLeftIcon2Press?: ((event: GestureResponderEvent) => void) | undefined;
  onRightIcon1Press?: ((event: GestureResponderEvent) => void) | undefined;
  onRightIcon2Press?: ((event: GestureResponderEvent) => void) | undefined;
}

/** ****DEFAULT TOAST */
export interface CDefaultToastType {
  customRef: any;
  position?: number;
  style?: StyleProp<ViewStyle>;
}

/** ****DEFAULT LOADING */
export interface CDefaultLoadingType {
  containerStyle?: StyleProp<ViewStyle>;

  isFullScreen?: boolean;
  isCoverScreen?: boolean;
}

/** ****MEDIA SLIDER */
export interface CMediaSliderType {
  data: any;

  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ViewStyle>;
  pagingDotContainer?: StyleProp<ViewStyle>;

  isShowPagingDot?: boolean;
  isSquareImage?: boolean;
  resizeMode?: string;
  onPressViewImage?: any;
}

/** ****MODAL */
export interface CModalType {
  renderContent?: any;

  modalContainerStyle?: StyleProp<ViewStyle>;

  onSwipeComplete: () => void;
  isModalVisible: boolean;
}

/** ****TEXT FIELD */
export interface CTextFieldType {
  customRef?: any;

  title?: string;
  placeHolder?: string;
  value?: string | number | any | undefined;

  isPassword: boolean;
  maxLength?: number;
  editable?: boolean;
  blurOnSubmit?: boolean;
  autoFocus?: boolean;
  isMultiline?: boolean;

  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<TextStyle>;

  keyboardType?: KeyboardTypeOptions;
  returnKeyLabel?: string | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;

  onChangeText: (text: string | any | number) => void;
  onSubmitEditingText?: () => void;
  onFocus?: () => void | undefined;
}
