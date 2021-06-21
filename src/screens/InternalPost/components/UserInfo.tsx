import React, { useState } from 'react'
import { Fade } from 'rn-placeholder'
import { Placeholder, PlaceholderLine } from 'rn-placeholder/lib/PlaceholderLine'

import { Box } from '../../../components/Box'
import { Text } from '../../../components/Text'
import { useRequest } from '../../../hooks/useRequest'
import { UserInterface } from '../../../shared/types'

const Row = ({ keyV, value }: { keyV: string; value: string }) => {
  return (
    <Box flexDirection={'row'} alignItems={'center'} marginBottom={'m'}>
      <Text fontSize={16} color={'label'}>
        {keyV}:{' '}
      </Text>
      <Text color={'label'}>{value}</Text>
    </Box>
  )
}

const UserInfo = ({ userId }: { userId: number }) => {
  const { response, error } = useRequest<UserInterface>({
    url: `/users/${userId}`,
    key: `USER_${userId}`,
  })

  if (!response?.id || error?.name) {
    return null
  }

  return (
    <Box marginVertical={'xxl'}>
      <Text fontSize={24} fontWeight={'bold'} color={'label'}>
        User
      </Text>
      <Row keyV={'Name'} value={response?.name ?? ''} />
      <Row keyV={'Email'} value={response?.email ?? ''} />
      <Row keyV={'Phone'} value={response?.phone ?? ''} />
      <Row keyV={'Website'} value={response?.website ?? ''} />
    </Box>
  )
}

export default UserInfo
