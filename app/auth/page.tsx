import { Box, Button, Flex, Input, VStack, Text, Link } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import auth from '../assets/auth.png'
import AuthForm from '../components/AuthForm'
import microsoft from '../assets/microsoft.png'
import playstore from '../assets/playstore.png'

const page: React.FC = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} h={'100vh'}>
      <Box display={{ base: 'none', md: 'block' }}>
        <Image
          src={auth}
          alt="Login image"
        />
      </Box>
      <VStack>
        <Box p={8}>
          <AuthForm />
        </Box>
        <Box>
          <Text fontSize={'xl'} textAlign={'center'} m={2} >
            Get the app.
          </Text>
          <Flex alignItems={'center'} justifyContent={'center'} gap={6} cursor={'pointer'}>
            <Image
              src={playstore}
              width={150}
              height={54}
              alt="Playstore"
            />
            <Image
              src={microsoft}
              width={150}
              height={44}
              alt="Microsoft"
            />
          </Flex>
        </Box>
      </VStack>
    </Flex>
  )
}

export default page
