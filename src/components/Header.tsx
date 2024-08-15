import React from 'react'
import { Flex } from '@chakra-ui/react'

const Header: React.FC = () => {
    return (
        <Flex 
            padding='1rem' 
            position='fixed' 
            top='0px' 
            left='0px' 
            right='0px'
        >
            Header
        </Flex>
    )
}

export default React.memo(Header)