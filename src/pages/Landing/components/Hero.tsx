import React from 'react'
import { IMG_HERO } from '../../../assets/images'
import { FaChevronRight } from 'react-icons/fa6'
import { 
    Center, 
    Container, 
    Flex, 
    Icon, 
    Image, 
    Text, 
} from '@chakra-ui/react'

const Hero: React.FC = () => {
    return (
        <Flex minHeight='100vh'>
            <Container padding='36px 12px' maxWidth='container.xl'>
                <Flex 
                    direction={{ base: 'column', xl: 'row' }}
                    alignItems='center' 
                    gap='2rem' 
                    height='100%'
                    justifyContent={{ base: 'center', xl: 'unset' }}
                >
                    <Flex 
                        direction='column' 
                        width='100%'
                        alignItems={{ base: 'center', xl: 'unset' }}
                    >
                        <Flex 
                            alignItems='center' 
                            gap='8px' 
                            borderRadius='50px'
                            backgroundColor='#f1f1f1'
                            width='max-content'
                            paddingRight='12px'
                            cursor='pointer'
                        >
                            <Center 
                                backgroundColor='#252430' 
                                padding='4px 12px' 
                                borderRadius='50px'
                            >
                                <Text
                                    color='white'
                                    fontWeight='300'
                                    fontSize='12px'
                                >New</Text>
                            </Center>
                            <Text
                                color='#252430'
                                fontWeight='400'
                                fontSize='12px'
                            >How KeDa uses AI to power their ERP System</Text>
                            <Icon as={FaChevronRight} color='#252430' fontSize='12px' />
                        </Flex>
                        <Text
                            color='#252430'
                            fontWeight='700'
                            fontSize='40px'
                            marginTop='16px'
                            textAlign={{ base: 'center', xl: 'unset' }}
                        >The most agile ERP on the planet</Text>
                        <Text
                            color='#858BA0'
                            fontWeight='300'
                            fontSize='20px'
                            textAlign={{ base: 'center', xl: 'unset' }}
                        >Powerful, flexible and data-driven, KeDa ERP makes it easy to build the exact ERP System your business needs.</Text>
                    </Flex>
                    <Flex width='100%'>
                        <Image 
                            src={IMG_HERO} 
                            width={{ base: '300px', sm: '400px', md: '500px', lg: '600px', xl: '100%' }} 
                            marginX={{ base: 'auto', xl: 'unset' }}
                        />
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default React.memo(Hero)