import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'

import Container from '../../components/Container'
import { Header } from '../../components/Header'
import { Icon } from '../../components/Icon'
import { Text } from '../../components/Text'
import { useRequest } from '../../hooks/useRequest'
import { StackNavigationProps, RootStackParamList } from '../../navigation/type'
import { usePosts } from '../../shared/Context/CreateContext'
import { useTheme } from '../../shared/theme/ThemeProvider'
import { PostInterface } from '../../shared/types'

import Comments from './components/Comments'
import UserInfo from './components/UserInfo'

const InternalPostScreen = ({ route, navigation }: StackNavigationProps<RootStackParamList, 'InternalPostScreen'>) => {
  const { spacing, colors } = useTheme()

  const { id, isFavorite } = route.params ?? {}

  const [star, setStar] = useState(isFavorite)

  const { addFavorite } = usePosts()

  const { response: post, error } = useRequest<PostInterface>({
    url: `/posts/${id}`,
  })

  const onPress = async () => {
    setStar((s) => !s)
    addFavorite({ id })
  }

  if (!post) {
    return (
      <Container>
        <Header
          title={'Post'}
          leftComponent={
            <TouchableOpacity onPress={() => navigation.canGoBack() && navigation.goBack()}>
              <Icon name={'chevronLeft'} fill={colors.label} />
            </TouchableOpacity>
          }
        />
        <Placeholder style={{ padding: spacing.s }} Animation={Fade}>
          <PlaceholderLine width={40} height={20} />
          <PlaceholderLine />
          <PlaceholderLine />
          <PlaceholderLine width={50} />
        </Placeholder>
      </Container>
    )
  }

  if (error) {
    return (
      <Container padding={'s'} alignItems={'center'}>
        <Text color={'label'}>{error.message}</Text>
      </Container>
    )
  }

  return (
    <Container>
      <Header
        title={'Post'}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.canGoBack() && navigation.goBack()}>
            <Icon name={'chevronLeft'} fill={colors.label} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <Icon name={'star'} fill={star ? '#ffc850' : '#ffffff'} size={30} />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: spacing.l }}>
        <Text fontSize={24} fontWeight={'bold'} color={'label'}>
          Description
        </Text>

        <Text fontSize={16} mt={'s'} textAlign={'justify'} color={'label'}>
          {post?.body}
        </Text>

        <UserInfo userId={post?.userId} />

        <Comments postId={post?.id} />
      </ScrollView>
    </Container>
  )
}

export default InternalPostScreen
