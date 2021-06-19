import React from 'react'
import { createBox } from '@shopify/restyle'

import { DarkTheme, Theme } from '../shared/theme/theme'

export const Box = createBox<Theme | DarkTheme>()

export type BoxProps = React.ComponentProps<typeof Box>
