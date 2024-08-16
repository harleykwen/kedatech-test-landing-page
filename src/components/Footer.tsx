import React from 'react'
import { Container, Flex, Text } from '@chakra-ui/react'

const Footer: React.FC = () => {
    return (
        <Flex backgroundColor='#252430'>
            <Container 
                paddingTop='20px' 
                paddingBottom='60px' 
                maxWidth='container.xl'
            >
                <Flex 
                    direction={{ base: 'column', sm: 'row' }}
                    alignItems='center' 
                    justifyContent='space-between'
                >
                    <Text
                        color='white'
                        fontWeight='300'
                        fontSize='14px'
                    >© 2024 KeDa Tech. All rights reserved.</Text>
                    <Text
                        color='white'
                        fontWeight='300'
                        fontSize='14px'
                    >Terms & Conditions ∙ Privacy Policy</Text>
                </Flex>
            </Container>
        </Flex>
    )
}

export default React.memo(Footer)