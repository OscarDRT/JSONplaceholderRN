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
import { usePosts } from '../../../shared/Context/CreateContext'
import { useTheme } from '../../../shared/theme/ThemeProvider'

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

  const { postViewed } = usePosts()

  const { colors } = useTheme()

  return (
    <Swipeable renderRightActions={RightActions} onSwipeableRightOpen={onSwipe}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={async () => {
          navigate('InternalPostScreen', { ...post })
          if (post.isNew) {
            await postViewed({ id: post.id })
          }
        }}
      >
        <Box
          backgroundColor={'foregroud'}
          borderRadius={8}
          marginBottom={'xxs'}
          flexDirection={'row'}
          alignItems={'center'}
          padding={'s'}
        >
          {post.isFavorite ? (
            <Icon name={'star'} size={15} />
          ) : (
            <Box height={10} width={10} backgroundColor={post.isNew ? 'primary' : 'transparent'} borderRadius={10} />
          )}
          <Box flex={1} marginHorizontal={'s'}>
            <Text color={'label'} textDecorationLine={'underline'}>
              {post.title}:
            </Text>
            <Text color={'label'}>{post.body}</Text>
          </Box>
          <Icon name={'chevronRight'} fill={colors.label} />
        </Box>
      </TouchableOpacity>
    </Swipeable>
  )
}

export default Item
