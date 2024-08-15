import React from 'react'
import { Flex } from '@chakra-ui/react'

const About: React.FC = () => {
    return (
        <Flex
            minHeight='100vh'
            justifyContent='center'
            alignItems='center'
        >
            About Section
        </Flex>
    )
}

export default React.memo(About)