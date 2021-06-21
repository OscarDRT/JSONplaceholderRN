import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import Container from '../../components/Container'
import { Text } from '../../components/Text'
import { useTheme } from '../../shared/theme/ThemeProvider'
import { PostInterface } from '../../shared/types'
import { usePosts } from '../../shared/Context/CreateContext'

import Item from './components/Item'

const TabAll = () => {
  const { posts, removePost, deleteAll } = usePosts()

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
        ListEmptyComponent={<Text textAlign={'center'}>The section all is empty</Text>}
        removeClippedSubviews={true}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={100}
        windowSize={7}
      />
      {!!posts.length && (
        <TouchableOpacity
          onPress={deleteAll}
          activeOpacity={0.5}
          style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.red, padding: spacing.xxl }}
        >
          <Text>Delete All</Text>
        </TouchableOpacity>
      )}
    </Container>
  )
}

export default TabAll
