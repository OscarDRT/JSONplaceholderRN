import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native'

export const useColorSchema = () => {
  return (_useColorScheme() as NonNullable<ColorSchemeName>) === 'dark'
}
