import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Design was built against a 375pt-wide baseline (iPhone-ish). Everything
// scales proportionally from there so layouts hold up on phones + tablets.
const BASE_WIDTH = 375;

export function scale(size: number): number {
  const newSize = size * (width / BASE_WIDTH);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function verticalScale(size: number): number {
  const newSize = size * (height / 812);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const screenWidth = width;
export const screenHeight = height;
export const isTablet = width >= 768;
export const isSmallDevice = width < 360;
