import React from 'react'
import { Flex } from '@chakra-ui/react'

const Hero: React.FC = () => {
    return (
        <Flex
            minHeight='100vh'
            justifyContent='center'
            alignItems='center'
        >
            Hero Section
        </Flex>
    )
}

export default React.memo(Hero)