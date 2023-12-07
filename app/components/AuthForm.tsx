"use client"
import { Box, Button, Flex, Input, VStack, Text, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import google from '../assets/google.png'

const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleSubmit = () => {
        console.log(input)
    }
    return (
        <>
            <Box border={"1px solid black"} borderRadius={8} p={8} mb={4}>
                <VStack spacing={4}>
                    <Image
                        src={logo}
                        width={200}
                        alt="Login image"
                    />
                    <Input placeholder='Email' size='sm' variant='outline' value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                    <Input placeholder='Password' size='sm' variant='outline' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                    {!isLogin && <Input placeholder='Confirm Password' size='sm' variant='outline' value={input.confirmPassword} onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })} />}
                    <Button colorScheme='blue' w={'full'} onClick={handleSubmit} >
                        {!isLogin ? 'Sign Up' : 'Log In'}
                    </Button>
                    <Box w={"full"}>
                        <Flex alignItems={'center'} justifyContent={'center'} >
                            <Box flex={2} h={"1px"} bg={"black"} />
                            <Text fontWeight={'bold'} mx={4}>
                                OR
                            </Text>
                            <Box flex={2} h={"1px"} bg={"black"} />
                        </Flex>
                        <Flex alignItems={'center'} justifyContent={'center'} gap={6} cursor={'pointer'}>
                            <Image src={google} width={20} height={20} alt="Google" />
                            <Link href={'#'} color={'blue.500'} fontSize={'md'} fontWeight={'bold'}>Login with Google</Link>
                        </Flex>

                    </Box>
                </VStack>
            </Box>
            <Box>
                <Flex p={8} border={"1px solid black"} borderRadius={8} w={'full'} justifyContent={'center'} gap={2}>
                    <Text fontSize={'lg'}>
                        {!isLogin ? 'Don\'t have an account?':'Already have an account?' }
                    </Text>
                    <Link href={'#'} colorScheme='blue' onClick={() => setIsLogin(!isLogin)} >
                        {!isLogin ? 'Sign Up' : 'Log In'}
                    </Link>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm
