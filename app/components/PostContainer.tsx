import { Container } from '@chakra-ui/react'
import React from 'react'
import Post from './Post'

const PostContainer: React.FC = () => {
    return (
        <Container maxW="container.sm">
            <Post
                image='https://bit.ly/dan-abramov'
                username="john_doe"
                avatar="https://example.com/avatar.jpg"
            />
            <Post
                image='https://bit.ly/dan-abramov'
                username="john_doe"
                avatar="https://example.com/avatar.jpg"
            />
            <Post
                image='https://bit.ly/dan-abramov'
                username="john_doe"
                avatar="https://example.com/avatar.jpg"
            />
            <Post
                image='https://bit.ly/dan-abramov'
                username="john_doe"
                avatar="https://example.com/avatar.jpg"
            />
            <Post
                image='https://bit.ly/dan-abramov'
                username="john_doe"
                avatar="https://example.com/avatar.jpg"
            />
        </Container>
    )
}

export default PostContainer
