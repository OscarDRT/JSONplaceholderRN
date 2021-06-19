import React, { useState } from 'react'
import { useWindowDimensions, FlatList } from 'react-native'
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder'

import { Box, MotiBox } from '../../components/Box'
import Container from '../../components/Container'

import Item from './components/Item'
import { mock } from './mock'

export interface PostI {
  userId: number
  id: number
  title: string
  body: string
}

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
  const [data, setData] = useState(mock)

  const removeItemFromArr = (arr: PostI[], item: PostI) => {
    return arr.filter((e) => e.id !== item.id)
  }

  return (
    <Container paddingVertical={'s'}>
      <FlatList<PostI>
        data={data ?? []}
        renderItem={({ item, index }: { item: PostI; index: number }) => (
          <Item
            post={item}
            index={index}
            onSwipe={() => {
              setData(removeItemFromArr(data, item))
            }}
          />
        )}
        keyExtractor={() => Math.random().toString()}
        ListEmptyComponent={ListEmptyComponent}
      />
    </Container>
  )
}

export default TabAll
