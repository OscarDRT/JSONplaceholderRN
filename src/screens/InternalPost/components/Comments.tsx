import React from 'react'
import { useWindowDimensions } from 'react-native'

import { Box } from '../../../components/Box'
import { Text } from '../../../components/Text'
import { useRequest } from '../../../hooks/useRequest'
import { CommentInterface } from '../../../shared/types'

const Comment = ({ comment }: { comment: CommentInterface }) => {
  return (
    <Box borderBottomWidth={1} marginBottom={'s'} paddingVertical={'m'}>
      <Text numberOfLines={1} mb={'xxs'} color={'label'}>
        {comment.name} - {comment.email}
      </Text>

      <Text textAlign={'justify'} color={'label'}>
        {comment.body}
      </Text>
    </Box>
  )
}

const Comments = ({ postId }: { postId: number }) => {
  const { width } = useWindowDimensions()

  const { response, error } = useRequest<CommentInterface[]>({
    url: `posts/${postId}/comments`,
    key: `POST_${postId}_comments`,
  })

  if (!response || error?.name) {
    return null
  }

  return (
    <Box>
      <Text fontSize={24} fontWeight={'bold'} color={'label'}>
        COMMENTS
      </Text>
      {response?.map((comment) => {
        return <Comment key={Math.random()} comment={comment} />
      })}
    </Box>
  )
}

export default Comments
