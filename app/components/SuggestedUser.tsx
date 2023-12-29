import { Avatar, Box, VStack, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const SuggestedUser = (props: Props) => {
    return (
        <Flex m={5} fontSize={'sm'} alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} >
                <Box>
                    <Avatar size={'sm'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </Box>
                <VStack alignItems={'center'} gap={0} >
                    <Text fontSize={'sm'} fontWeight={'bold'} ml={2} textAlign={'left'}>username</Text>
                    <Text fontSize={'xs'} ml={4} color={'grey'} textAlign={'left'}>178 Followers</Text>
                </VStack>
            </Flex>
            <Box>
                <Button colorScheme='transparent' color={'blue.500'} _hover={{ color: 'white' }} size={'sm'} >
                    Follow
                </Button>
            </Box>
        </Flex>
    )
}

export default SuggestedUser