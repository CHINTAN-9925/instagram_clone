import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Image } from '@chakra-ui/react'

interface propType {
    username: string,
    avatar: string,
    image: string
}
const Post: React.FC<propType> = ({image,username,avatar}) => {
    return (
        <>
            {/* <PostHeader username={username} avatar={avatar} />*/}
            <PostHeader username={username} avatar={avatar} />
            <Image boxSize='500px' objectFit='cover' src={image} alt='Dan Abramov' rounded={'lg'} />
            <PostFooter username={username} />
        </>
    )
}

export default Post
