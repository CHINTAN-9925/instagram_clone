"use client"
import { Box, Flex, InputGroup, Text,Input, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../assets/constants'

interface propType {
    username: string
}
const PostFooter: React.FC<propType> = ({username}) => {
    const [isLike, setIsLike] = useState<boolean>(false)
    const [likes, setLikes] = useState<number>(1000)

    const handleClick = () => {
        if (isLike) {
            setIsLike(false)
            setLikes(likes - 1)
        } else {
            setIsLike(true)
            setLikes(likes + 1)
        }
    }
    return (
        <>
            <Flex alignItems={'center'} gap={2}>
                <Box onClick={handleClick} cursor={'pointer'} m={2}>
                    {isLike ? (
                        <UnlikeLogo />
                    ) : (
                        <NotificationsLogo />
                    )}
                </Box>
                <Box cursor={'pointer'}>
                    <CommentLogo />
                </Box>
            </Flex>
                 <Text fontSize={'sm'}>{likes} likes</Text>
                 <Text fontSize={'sm'} fontWeight={700}>
                        {username}
                        <Text as={'span'} fontWeight={400} ml={2}>
                            caption from user for post 
                        </Text>
                 </Text>
                 <Text fontSize={'sm'} color={'gray.500'}>
                        View 1000 comments
                 </Text>
                        
                <Flex mb={4}>
                        <InputGroup>
                        <Input variant={"flushed"} color={'white'} placeholder={"Add a comment..."} fontSize={14}/>
                        <InputRightElement>
                        <Button fontSize={14} color={'blue.500'} bg={"transparent"} fontWeight={700} _hover={{ bg: 'grey.100' }}>
                            Post
                        </Button>
                        </InputRightElement>
                        </InputGroup>
                </Flex>
        </>
    )
}

export default PostFooter
