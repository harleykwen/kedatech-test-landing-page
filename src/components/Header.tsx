import React, { useRef } from 'react'
import ModalLogin from './ModalLogin'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { 
    Button,
    Container, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerOverlay, 
    Flex, 
    Icon, 
    IconButton, 
    Text,
    useDisclosure, 
} from '@chakra-ui/react'

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
        { label: 'About', href: 'about' },
        { label: 'Pricing', href: 'pricing' },
        { label: 'Contact', href: 'contact' },
    ]

    const btnDrawerRef = useRef<any>()
    const modalLoginDisclosure = useDisclosure()
    const drawerDisclosure = useDisclosure()

    const handleScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

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

                    <Flex
                        display={{ base: 'none', sm: 'flex' }} 
                        alignItems='center' 
                        gap='1rem'
                    >
                        {NAVS?.map((nav: INav, navIndex: number) => {
                            return (
                                <Text
                                    key={navIndex}
                                    color={isOnTop ? '#252430' : 'white'}
                                    transition='.6s'
                                    fontWeight='400'
                                    fontSize='16px'
                                    cursor='pointer'
                                    onClick={() => handleScroll(nav?.href)}
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

                    <IconButton  
                        ref={btnDrawerRef} 
                        display={{ base: 'block', sm: 'none' }} 
                        icon={<Icon as={HiOutlineMenuAlt3} />} 
                        aria-label={'menu'} 
                        onClick={drawerDisclosure?.onOpen}
                    />
                </Flex>

                <Drawer
                    isOpen={drawerDisclosure?.isOpen}
                    placement='right'
                    onClose={drawerDisclosure?.onClose}
                    finalFocusRef={btnDrawerRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Flex
                                direction='column'
                                justifyContent='center'
                                alignItems='center'
                                gap='1rem'
                                height='100%'
                            >
                                {NAVS?.map((nav: INav, navIndex: number) => {
                                    return (
                                        <Text
                                            key={navIndex}
                                            color='#252430'
                                            transition='.6s'
                                            fontWeight='400'
                                            fontSize='16px'
                                            cursor='pointer'
                                            onClick={() => {
                                                drawerDisclosure?.onClose()
                                                handleScroll(nav?.href)
                                            }}
                                        >{nav?.label}</Text>
                                    )
                                })}
                                <Button
                                    {...BUTTON_STYLE}
                                    variant='solid'
                                    color='white'
                                    backgroundColor={'#252430'}
                                    _hover={{
                                        backgroundColor: '#3a3944'
                                    }}
                                    _focus={{
                                        backgroundColor: '#121218'
                                    }}
                                    _active={{
                                        backgroundColor: '#121218'
                                    }}
                                    transition='.6s'
                                    onClick={modalLoginDisclosure?.onOpen}
                                >Login</Button>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                <ModalLogin
                    isOpen={modalLoginDisclosure?.isOpen}
                    onClose={modalLoginDisclosure?.onClose}
                />
            </Container>
        </Flex>
    )
}

export default React.memo(Header)