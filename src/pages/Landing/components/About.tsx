import React from 'react'
import { Center, Container, Flex, Text } from '@chakra-ui/react'

const About: React.FC = () => {
    return (
        <Flex backgroundColor='#252430' id='about'>
            <Container padding='108px 12px' maxWidth='container.xl'>
                <Flex as={Center}>
                    <Text 
                        fontStyle='italic' 
                        color='white'
                        fontWeight='300'
                        fontSize='24px'
                        width={{ base: '100%', sm: '80%' }}
                    >❝At KeDa ERP, we specialize in transforming business operations with our <b>cutting-edge ERP solutions</b>. Our mission is to empower organizations with integrated software that streamlines processes, enhances productivity, and drives growth. With a team of experts dedicated to innovation and customer satisfaction, we provide <b>tailored solutions</b> designed to meet the unique needs of your business. Experience a new level of efficiency and insight with KeDa ERP where technology meets excellence.❞</Text>
                </Flex>
            </Container>
        </Flex>
    )
}

export default React.memo(About)