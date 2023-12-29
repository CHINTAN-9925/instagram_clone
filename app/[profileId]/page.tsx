'use client';

import { Avatar, Box, Container, Flex, VStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import ProfileHeader from '../components/ProfileHeader';
import ProfileTabs from '../components/ProfileTabs';
import ProfilePosts from '../components/ProfilePosts';


export default function Page() {
  const router = useRouter();

  return (
    <Container maxW={'container.lg'} py={5}>
      <Flex py={10} px={4} pl={{base:4,md:10}} w={'100%'} mx={"auto"} flexDirection={"column"}>
        <ProfileHeader/>
      </Flex>
      <Flex px={{base:4,md:10}} maxW={'full'} mx={"auto"} borderTop={"1px solid"} borderColor={"whiteAlpha.300"} direction={"column"}>
        <ProfileTabs/>
        <ProfilePosts/>
      </Flex>
    </Container>
  );
}