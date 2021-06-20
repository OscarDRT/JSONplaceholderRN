import React from 'react'
import { Animated } from 'react-native'
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Box } from '../../../components/Box'
import { AnimatedText, Text } from '../../../components/Text'
import { Icon } from '../../../components/Icon'
import { RootStackParamList } from '../../../navigation/type'
import { PostInterface } from '../../../shared/types'

interface ItemProps {
  post: PostInterface
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
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList, 'PostsScreen'>>()

  return (
    <Swipeable renderRightActions={RightActions} onSwipeableRightOpen={onSwipe}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigate('InternalPostScreen', { ...post })}>
        <Box
          backgroundColor={'foregroud'}
          borderRadius={8}
          marginBottom={'xxs'}
          flexDirection={'row'}
          alignItems={'center'}
          padding={'s'}
        >
          <Box height={10} width={10} backgroundColor={post.isNew ? 'primary' : 'transparent'} borderRadius={10} />
          <Box flex={1} marginHorizontal={'s'}>
            <Text textDecorationLine={'underline'}>{post.title}:</Text>
            <Text>{post.body}</Text>
          </Box>
          <Icon name={'chevronRight'} />
        </Box>
      </TouchableOpacity>
    </Swipeable>
  )
}

export default Item
