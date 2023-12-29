import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestionHeader from './SuggestionHeader'
import SuggestedUser from './SuggestedUser'

type Props = {}

const Suggestions = (props: Props) => {
  return (
    <Box >
        <SuggestionHeader/>
        <SuggestedUser/>
        <SuggestedUser/>
        <SuggestedUser/>
    </Box>
  )
}

export default Suggestions