'use client'
import { Link } from '@chakra-ui/next-js'

export default function Page() {
  return (
    <Link href='/about' color='yellow.400' _hover={{ color: 'red.500' }}>
      About
    </Link>
  )
}