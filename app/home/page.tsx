import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import PageLayout from '../components/PageLayout'
import PostContainer from '../components/PostContainer'

const page: React.FC = () => {
    return (
        <Container maxW="container.lg">
            <Flex gap={20}>
                <Box border={"1px solid blue"} borderRadius={8} flex={3}>
                    <PostContainer/>
                </Box>
                <Box flex={2} display={{ base: 'none', md: 'block' }} border={"1px solid blue"} borderRadius={8}>
                    suggestion sdfvbnkjdfgsbkjbnjdfkvsnkjdfv
                </Box>
            </Flex>
        </Container>
    )
}

export default page
