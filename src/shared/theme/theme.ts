import { createTheme } from '@shopify/restyle'

export const palette = {
  backgroundLigth: '#F0F0F0',
  backgroundDark: '#19171A',
  foregroudLigth: '#FFFFFF',
  foregroudDark: '#27242c',
  primary: '#346299',
  secondary: '#EBD900',
  green: '#22C91A',
  red: '#F80100',
  transparent: 'transparent',
  /*  */
  labelLigth: '#000',
  labelDark: '#ffffff',
}

export const theme = createTheme({
  colors: {
    background: palette.backgroundLigth,
    foregroud: palette.foregroudLigth,
    primary: palette.primary,
    secondary: palette.secondary,
    green: palette.green,
    red: palette.red,
    transparent: palette.transparent,
    /*  */
    label: palette.labelLigth,
  },
  spacing: {
    xxs: 8,
    xs: 10,
    s: 12,
    m: 14,
    l: 16,
    xl: 18,
    xxl: 20,
  },
  breakpoints: {},
})

export const darkTheme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.backgroundDark,
    foregroud: palette.foregroudDark,
    /*  */
    label: palette.labelDark,
  },
})

export type Theme = typeof theme
export type DarkTheme = typeof darkTheme
