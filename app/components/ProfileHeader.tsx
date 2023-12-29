import { Avatar, AvatarGroup, Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const ProfileHeader = (props: Props) => {
    return (
        <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", md: "row" }}>
            <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
                <Avatar size={'xl'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </AvatarGroup>
            <VStack alignItems={'start'} gap={2} mx={"auto"} flex={1}>
                <Flex gap={4} direction={{ base: "column", md: "row" }} justifyContent={{ base: "center", sm: "flex-start" }} alignItems={"center"} w={"full"}>
                    <Text fontSize={{ base: "sm", md: "lg" }}>username</Text>
                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                        <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.800" }} size={{ base: "xs", md: "sm" }}>Edit Profile</Button>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
                    <Text fontSize={{ base: "sx", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>4</Text> Posts
                    </Text>
                    <Text fontSize={{ base: "sx", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"}>178</Text> Followers
                    </Text>
                    <Text fontSize={{ base: "sx", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"}>170</Text> Following
                    </Text>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                    <Text fontSize={"sm"}> Bio graphy</Text>
                </Flex>
            </VStack>
        </Flex>
    )
}

export default ProfileHeader