import * as React from 'react'
import { TouchableOpacity, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, SceneRendererProps, NavigationState } from 'react-native-tab-view'

import { Box } from '../../components/Box'
import { Text } from '../../components/Text'
import { useTheme } from '../../shared/theme/ThemeProvider'

import TabAll from './TabAll'

const SecondRoute = () => <Box style={{ flex: 1, backgroundColor: '#673ab7' }} />

const renderScene = SceneMap({
  first: TabAll,
  second: SecondRoute,
})

export default function PostsScreen() {
  const layout = useWindowDimensions()

  const { colors, spacing } = useTheme()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Favotites' },
  ])

  const _renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<{ key: string; title: string }>
    }
  ) => {
    const { navigationState } = props ?? {}
    return (
      <Box
        flexDirection={'row'}
        borderColor={'green'}
        borderWidth={1}
        margin={'s'}
        borderRadius={8}
        overflow={'hidden'}
      >
        {navigationState.routes.map((route, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => setIndex(idx)}
              style={{
                flex: 1,
                paddingVertical: spacing.s,
                alignItems: 'center',
                backgroundColor: idx === index ? colors.green : colors.foregroud,
              }}
            >
              <Text fontSize={16} color={idx === index ? 'foregroud' : 'green'} fontWeight={'bold'}>
                {route.title}
              </Text>
            </TouchableOpacity>
          )
        })}
      </Box>
    )
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={_renderTabBar}
      initialLayout={{ width: layout.width }}
    />
  )
}
