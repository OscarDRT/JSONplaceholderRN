import React from 'react'
import { motify } from 'moti'
import { Animated, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'

import { Box, MotiBox } from '../../../components/Box'
import { AnimatedText, Text } from '../../../components/Text'

const MotiTouch = motify(TouchableOpacity)()

interface ItemProps {
  post: {
    userId: number
    id: number
    title: string
    body: string
  }
  index: number
  onSwipe: () => void
}

const RightActions = (progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  return (
    <Box flex={1} backgroundColor={'red'} justifyContent={'center'} marginBottom={'s'} paddingHorizontal={'s'}>
      <AnimatedText
        fontSize={18}
        fontWeight={'bold'}
        textAlign={'right'}
        color={'foregroud'}
        style={{ transform: [{ scale }] }}
      >
        Delete Post
      </AnimatedText>
    </Box>
  )
}

const Item = ({ post, index, onSwipe }: ItemProps) => {
  const { width } = useWindowDimensions()

  return (
    <Swipeable renderRightActions={RightActions} onSwipeableRightOpen={onSwipe}>
      <Box
        backgroundColor={'foregroud'}
        borderRadius={8}
        marginBottom={'xxs'}
        flexDirection={'row'}
        alignItems={'center'}
        padding={'s'}
      >
        <Box height={10} width={10} backgroundColor={'primary'} borderRadius={10} />
        <Box flex={1} marginHorizontal={'s'}>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </Box>
        <Box height={10} width={10} backgroundColor={'primary'} />
      </Box>
    </Swipeable>
  )
}

export default Item
