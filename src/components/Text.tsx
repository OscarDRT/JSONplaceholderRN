import { createText } from '@shopify/restyle'
import { Animated } from 'react-native'

import { DarkTheme, Theme } from '../shared/theme/theme'

export const Text = createText<Theme | DarkTheme>()

export const AnimatedText = Animated.createAnimatedComponent(Text)
