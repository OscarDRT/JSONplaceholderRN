import React, { ReactNode } from 'react'
import { ThemeProvider as ThemeProviderRN, useTheme as useThemeRN } from '@shopify/restyle'

import { useColorSchema } from '../../hooks/useColorSchema'

import { theme, darkTheme, Theme, DarkTheme } from './theme'

interface ThemeProviderProps {
  children: ReactNode
}

export const useTheme = () => useThemeRN<Theme | DarkTheme>()

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const darkModeOn = useColorSchema()
  return <ThemeProviderRN theme={darkModeOn ? darkTheme : theme}>{children}</ThemeProviderRN>
}
