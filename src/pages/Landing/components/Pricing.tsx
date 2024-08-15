import React from 'react'
import { Flex } from '@chakra-ui/react'

const Pricing: React.FC = () => {
    return (
        <Flex
            minHeight='100vh'
            justifyContent='center'
            alignItems='center'
        >
            Pricing
        </Flex>
    )
}

export default React.memo(Pricing)