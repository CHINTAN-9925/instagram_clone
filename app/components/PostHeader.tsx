import { Avatar, Box, Flex,Text } from '@chakra-ui/react'
import React from 'react'

interface propType {
    username: string,
    avatar: string
}
const PostHeader: React.FC<propType> = ({username,avatar}) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'100%'} p={2}>
            <Flex gap={4} justifyContent={'center'} alignItems={'center'} >
                <Avatar size={'sm'} name='Dan Abrahmov' src={avatar} />
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Text fontWeight={'bold'} fontSize={15} mr={2}>{username}</Text>
                    <Text fontSize={15}>@1w</Text>
                </Flex>
            </Flex>
            <Flex alignItems={'center'} justifyContent={'center'} ml={40}>
                <Text fontSize={12} color={'blue.500'} fontWeight={'bold'} _hover={{ cursor: 'pointer',color:'white' }} transition={'0.2s ease-in-out'}>Unfollow</Text>
            </Flex>
            <Box></Box>
        </Flex>
    )
}

export default PostHeader
