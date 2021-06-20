import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder'

import { Box } from '../../components/Box'
import Container from '../../components/Container'
import { Text } from '../../components/Text'
import { useRequest } from '../../hooks/useRequest'
import { useTheme } from '../../shared/theme/ThemeProvider'
import { PostInterface } from '../../shared/types'
import AsyncStorageService from '../../shared/AsyncStorageService'
import useTransformPosts from '../../hooks/useTransformPosts'

import Item from './components/Item'

const ListEmptyComponent = () => {
  return (
    <Box>
      {new Array(10).fill('').map(() => {
        return (
          <Placeholder
            key={Math.random().toString()}
            style={{ alignItems: 'center', justifyContent: 'center' }}
            Animation={Fade}
            Left={() => <PlaceholderMedia isRound size={10} style={{ margin: 10 }} />}
            Right={() => <PlaceholderMedia size={10} style={{ margin: 10 }} />}
          >
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
        )
      })}
    </Box>
  )
}

const TabAll = () => {
  const { transformPosts, posts, setPosts, removePost } = useTransformPosts()

  React.useEffect(() => {
    transformPosts()
  }, [transformPosts])

  const { colors, spacing } = useTheme()

  return (
    <Container paddingVertical={'s'}>
      <FlatList<PostInterface>
        data={posts ?? []}
        renderItem={({ item, index }: { item: PostInterface; index: number }) => (
          <Item
            post={item}
            index={index}
            onSwipe={() => {
              removePost({ post: item })
            }}
          />
        )}
        keyExtractor={() => Math.random().toString()}
        ListEmptyComponent={ListEmptyComponent}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.red, padding: spacing.xxl }}
      >
        <Text>Delete All</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default TabAll
