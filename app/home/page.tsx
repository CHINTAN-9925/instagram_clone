import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import PageLayout from '../components/PageLayout'
import PostContainer from '../components/PostContainer'
import Suggestions from '../components/Suggestions'

const page: React.FC = () => {
    return (
        <Container maxW="container.lg">
            <Flex gap={20}>
                <Box flex={3}>
                    <PostContainer />
                </Box>
                <Box flex={2} display={{ base: 'none', md: 'block' }} >
                    <Suggestions />
                </Box>
            </Flex>
        </Container>
    )
}

export default page
