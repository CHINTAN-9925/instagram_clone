import { Box, Flex, Link as ChakraLink, Avatar, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../assets/constants'
import { Smokum } from 'next/font/google'
import { AiFillHome } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"

interface sidebarItemsType {
    icon: React.ReactNode,
    text: string,
    link?: string
}
const SideBar: React.FC = () => {
    const sidebarItems: sidebarItemsType[] = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: "/",
        },
        {
            icon: <SearchLogo />,
            text: "Search",
        },
        {
            icon: <NotificationsLogo />,
            text: "Notification",
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
        },
        {
            icon: <Avatar size={"sm"} name='Dan Abrahmov' src='./assets/profilepic.png' />,
            text: "Profile",
            link: "/assprogrammer",
        },
    ]
    return (
        <Box w={"full"} h={"100vh"} border={"1px solid grey"} p={8} position={"sticky"} top={0} left={0}>
            <Flex justifyContent={"center"} alignItems={"center"}>
                <ChakraLink href={'/'} as={Link} display={{ base: 'none', md: 'block' }} ><InstagramLogo /></ChakraLink>
                <ChakraLink href={'/'} as={Link} display={{ base: 'block', md: 'none' }} ><InstagramMobileLogo /></ChakraLink>
            </Flex>

            <Flex flexDirection={"column"} gap={8} mt={8}>
                {sidebarItems.map((item, index) => (
                    <Flex key={index} gap={3} alignItems={"center"} justifyContent={"center"}>
                        <ChakraLink href='{item.link}' justifyContent={"center"} alignItems={"center"} _hover={{ bg: "whiteAlpha.500" }}>
                            {item.icon}
                        </ChakraLink>
                        <Tooltip key={index} label={item.text} hasArrow openDelay={300} placement='right' >
                            <Box display={{ base: 'none', md: 'block' }}>
                                <ChakraLink href={item.link}>{item.text}</ChakraLink>
                            </Box>
                        </Tooltip>
                    </Flex>

                ))}
                <Flex mt={400} gap={3} alignItems={"center"} justifyContent={"center"}>
                    <ChakraLink href='{item.link}' justifyContent={"center"} alignItems={"center"} _hover={{ bg: "whiteAlpha.500" }}>
                        <BiLogOut size={25} />
                    </ChakraLink>
                    <Tooltip label={"Logout"} hasArrow openDelay={300} placement='right' >
                        <Box display={{ base: 'none', md: 'block' }}>
                            <ChakraLink href={"/logout"}>Log out</ChakraLink>
                        </Box>
                    </Tooltip>
                </Flex>
            </Flex>
        </Box>
    )
}

export default SideBar
