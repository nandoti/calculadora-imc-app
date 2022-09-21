import { Dimensions } from 'react-native';
import { rem as RNRem,  } from 'responsive-native'

const fontScale = Dimensions.get('window').fontScale;

export function rem (size: number, shouldScale?: boolean) {
  return RNRem({
    size,
    baseFontSize: 16,
    fontScaleFactor: fontScale,
    shouldScale
  })
}