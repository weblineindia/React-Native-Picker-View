import {Dimensions,Platform} from 'react-native';

const { width, height } = Dimensions.get('window');

export const ScreenWidth = width;
export const ScreenHeight = height;
export const IS_IOS: boolean = Platform.OS === 'ios';
export const IPhoneX = IS_IOS && ((height === 812 || height === 896) && (width === 375 || width === 414));
export const Separator = '#b0bec5';
export const Black = 'rgb(0,0,0)';
export const White = '#FFFFFF';
export const Grey = '#e6e6e6';
export const PrimaryDark = '#62757f';
export const Blue = '#0000ff';