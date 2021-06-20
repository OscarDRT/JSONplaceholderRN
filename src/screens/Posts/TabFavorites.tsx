import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import Container from '../../components/Container'
import { Text } from '../../components/Text'
import { useTheme } from '../../shared/theme/ThemeProvider'
import { PostInterface } from '../../shared/types'
import useTransformPosts from '../../hooks/useTransformPosts'

import Item from './components/Item'

const TabFavorites = () => {
  const { transformPosts, posts, removePost } = useTransformPosts()

  React.useEffect(() => {
    transformPosts()
  }, [transformPosts])

  const { colors, spacing } = useTheme()

  return (
    <Container paddingVertical={'s'}>
      <FlatList<PostInterface>
        data={posts.filter((post) => post.isFavorite === true) ?? []}
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
        ListEmptyComponent={<Text textAlign={'center'}>The section favorites is empty</Text>}
        removeClippedSubviews={true}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={100}
        windowSize={7}
      />
    </Container>
  )
}

export default TabFavorites
