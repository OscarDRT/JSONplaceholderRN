import React from 'react'
import { createBox } from '@shopify/restyle'
import { motify } from 'moti'

import { DarkTheme, Theme } from '../shared/theme/theme'

export const Box = createBox<Theme | DarkTheme>()
export const MotiBox = motify(Box)()

export type BoxProps = React.ComponentProps<typeof Box>
