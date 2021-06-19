import React, { ReactNode } from 'react'

import { Box, BoxProps } from './Box'

interface ContainerProps extends BoxProps {
  children: ReactNode
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <Box flex={1} backgroundColor={'background'} {...props}>
      {children}
    </Box>
  )
}

export default Container
