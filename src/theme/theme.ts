import { extendTheme } from "native-base"

export const theme = {
  spacing: {
    small: 8,
    medium: 16,
    large: 24
  }
}

export const nativeBaseTheme = extendTheme({
  colors: {
    brand: {
      primary: '#0ABAA4',
    },
    background: {
      primary: '#232330',
      secondary: '#161623'
    },
    neutral: {
      white: '#FDFFFD',
      black: '#FDFFFD'
    }
  },
  fonts: {
    body: 'poppins-medium',
  }
})

type CustomThemeType = typeof nativeBaseTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}