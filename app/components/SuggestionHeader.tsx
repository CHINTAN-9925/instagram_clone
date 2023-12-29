import { Avatar, Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const SuggestionHeader = (props: Props) => {
    return (
        <>
            <Box m={5} alignItems={'center'} justifyContent={'space-between'} display={{ base: 'none', md: 'flex' }}>
                <Box mr={2}>
                    <Avatar size={'sm'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </Box>
                <Text fontSize={"sm"}>username</Text>
                <Button colorScheme='transparent' _hover={{ color: 'blue.500' }} size={'sm'} >
                    Log out
                </Button>
            </Box>
            <Text fontSize={'sm'} color={'grey'} m={5}>Suggested for you</Text>
        </>
    )
}

export default SuggestionHeader