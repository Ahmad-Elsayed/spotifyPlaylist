import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 816;

const widthRatio = width / guidelineBaseWidth;
const heightRatio = height / guidelineBaseHeight;

export const scale = (size: number) => widthRatio * size;
export const verticalScale = (size: number) => heightRatio * size;
