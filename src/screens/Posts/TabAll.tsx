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
  const { response, error } = useRequest<PostInterface[]>({
    url: `/posts`,
  })

  const { colors, spacing } = useTheme()

  const removeItemFromArr = (arr: PostInterface[], item: PostInterface) => {
    return arr.filter((e) => e.id !== item.id)
  }

  React.useEffect(() => {
    const savePosts = async () => {
      return await AsyncStorageService.retrieve('oscar')
    }
    savePosts().then((r) => console.log(r))
  }, [])

  return (
    <Container paddingVertical={'s'}>
      <FlatList<PostInterface>
        data={response ?? []}
        renderItem={({ item, index }: { item: PostInterface; index: number }) => (
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
