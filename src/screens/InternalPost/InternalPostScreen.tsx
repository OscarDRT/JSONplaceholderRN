import React, { useState } from 'react'
import { Alert } from 'react-native'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'

import { Box } from '../../components/Box'
import Container from '../../components/Container'
import { Text } from '../../components/Text'
import { useRequest } from '../../hooks/useRequest'
import { StackNavigationProps, RootStackParamList } from '../../navigation/type'
import { placeholderApi } from '../../shared/api'
import { useTheme } from '../../shared/theme/ThemeProvider'
import { PostInterface } from '../../shared/types'

import UserInfo from './components/UserInfo'

const InternalPostScreen = ({ route }: StackNavigationProps<RootStackParamList, 'InternalPostScreen'>) => {
  const { spacing } = useTheme()

  const { id } = route.params ?? {}

  const { response: post, error } = useRequest<PostInterface>({
    url: `/posts/${id}`,
  })

  if (!post) {
    return (
      <Placeholder style={{ padding: spacing.s }} Animation={Fade}>
        <PlaceholderLine width={40} height={20} />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine width={50} />
      </Placeholder>
    )
  }

  if (error) {
    return (
      <Container padding={'s'} alignItems={'center'}>
        <Text>{error.message}</Text>
      </Container>
    )
  }

  return (
    <Container padding={'s'}>
      <Box>
        <Text fontSize={24} fontWeight={'bold'}>
          Description
        </Text>

        <Text fontSize={16} mt={'s'} textAlign={'justify'}>
          {post?.body}
        </Text>

        <UserInfo userId={post?.userId} />
      </Box>
    </Container>
  )
}

export default InternalPostScreen
