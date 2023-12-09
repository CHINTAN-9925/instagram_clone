"use client"
import { Box, Flex } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import SideBar from './SideBar';


interface ComponentProps {
    children: any;
}
const PageLayout: React.FC<ComponentProps> = ({ children }) => {

    const path = usePathname()
    return (
        <Flex>
            {path !== '/auth' && (<Box w={{ base: '70px', md: '240px' }}>
                <SideBar />
            </Box>)}
            <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout
