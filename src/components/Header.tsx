import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { 
    Button,
    Container, 
    Flex, 
    Text,
    useDisclosure, 
} from '@chakra-ui/react'
import ModalLogin from './ModalLogin'

interface INav {
    label: string
    href: string
}

interface IHeaderProps {
    isOnTop: boolean
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    const { isOnTop } = props

    const BUTTON_STYLE = {
        width: '100%',
        fontSize: '16px',
        fontWeight: '400',
        borderRadius: '4px',
    }

    const NAVS: INav[] = [
        { label: 'About', href: '#about' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Contact', href: '#contact' },
    ]

    const modalLoginDisclosure = useDisclosure()

    return (
        <Flex 
            backgroundColor={isOnTop ? 'transparent' : '#252430'}
            transition='.6s'
            position='fixed'
            top='0px'
            left='0px'
            right='0px'
        >
            <Container maxWidth='container.xl' paddingY='24px'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Text
                        color={isOnTop ? '#252430' : 'white'}
                        transition='.6s'
                        fontWeight='700'
                        fontSize='16px'
                    >KeDa ERP</Text>

                    <Flex alignItems='center' gap='1rem'>
                        {NAVS?.map((nav: INav, navIndex: number) => {
                            return (
                                <Text
                                    key={navIndex}
                                    as={ReactRouterLink}
                                    to={nav?.href}
                                    color={isOnTop ? '#252430' : 'white'}
                                    transition='.6s'
                                    fontWeight='400'
                                    fontSize='16px'
                                >{nav?.label}</Text>
                            )
                        })}
                        <Button 
                            {...BUTTON_STYLE}
                            variant='solid'
                            color={isOnTop ? 'white' : '#252430'}
                            backgroundColor={isOnTop ? '#252430' : 'white'}
                            _hover={{
                                backgroundColor: isOnTop ? '#3a3944' : 'white'
                            }}
                            _focus={{
                                backgroundColor: isOnTop ? '#121218' : 'white'
                            }}
                            _active={{
                                backgroundColor: isOnTop ? '#121218' : 'white'
                            }}
                            transition='.6s'
                            onClick={modalLoginDisclosure?.onOpen}
                        >Login</Button>
                    </Flex>
                </Flex>

                <ModalLogin
                    isOpen={modalLoginDisclosure?.isOpen}
                    onClose={modalLoginDisclosure?.onClose}
                />
            </Container>
        </Flex>
    )
}

export default React.memo(Header)