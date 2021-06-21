import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Box, BoxProps } from './Box'
import { Text } from './Text'

interface HeaderProps extends BoxProps {
  leftComponent?: ReactNode
  title: ReactNode
  rightComponent?: ReactNode
}

export const Header = ({ leftComponent, title, rightComponent, ...props }: HeaderProps) => {
  return (
    <Box zIndex={2} backgroundColor={'green'}>
      <SafeAreaView edges={['top']}>
        <Box
          {...props}
          backgroundColor={'green'}
          minHeight={70}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          paddingHorizontal={'xxl'}
        >
          <Box flex={1} alignItems={'center'} flexDirection={'row'} justifyContent={'flex-start'}>
            {leftComponent}
          </Box>
          <Box flex={1} alignItems={'center'} flexDirection={'row'} justifyContent={'center'}>
            <Text fontSize={26} color={'label'} fontWeight={'bold'}>
              {title}
            </Text>
          </Box>
          <Box flex={1} alignItems={'center'} flexDirection={'row'} justifyContent={'flex-end'}>
            {rightComponent}
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  )
}
