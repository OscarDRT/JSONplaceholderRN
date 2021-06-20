import { ParamListBase, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface StackNavigationProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> {
  navigation: StackNavigationProp<ParamList, RouteName>
  route: RouteProp<ParamList, RouteName>
}

export type RootStackParamList = {
  PostsScreen: undefined
  InternalPostScreen: { userId: number; id: number; title: string; body: string; isNew?: boolean; isFavorite?: boolean }
}
