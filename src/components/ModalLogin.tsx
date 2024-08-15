import React, { useState } from 'react'
import useChakraHooks from '../hooks/chakra.hooks'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import { 
    Button,
    FormControl, 
    FormLabel, 
    Icon, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    Text, 
} from '@chakra-ui/react'

interface IModalLogin {
    isOpen: boolean
    onClose: () => void
}

const ModalLogin: React.FC<IModalLogin> = (props: IModalLogin) => {
    const { isOpen, onClose } = props
    
    const { BUTTON_MAIN_STYLE, INPUT_VISIBLE_STYLE } = useChakraHooks()

    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius='16px' margin='12px'>
                <ModalHeader paddingTop='24px'>
                    <Text
                        color='#252430'
                        fontWeight='700'
                        fontSize='24px'
                    >Sign In to Your Account</Text>
                    <Text
                        color='#858BA0'
                        fontWeight='300'
                        fontSize='14px'
                    >Access your personalized dashboard by logging in.</Text>
                </ModalHeader>
                <ModalCloseButton top='24px' right='16px' />
                <ModalBody>
                    <FormControl>
                        <FormLabel color='#252430' fontSize='14px'>Email</FormLabel>
                        <Input 
                            {...INPUT_VISIBLE_STYLE} 
                            type='email' 
                            fontSize='14px' 
                        />
                    </FormControl>

                    <FormControl marginTop='8px'>
                        <FormLabel color='#252430' fontSize='14px'>Passowrd</FormLabel>
                        <InputGroup>
                            <Input 
                                {...INPUT_VISIBLE_STYLE} 
                                type={showPassword ? 'text' : 'password'} 
                                fontSize='14px' 
                            />
                            <InputRightElement>
                                <Icon 
                                    as={showPassword ? LuEyeOff : LuEye} 
                                    fontSize='24px'
                                    color='#252430'
                                    onClick={() => setShowPassword(!showPassword)}
                                    cursor='pointer'
                                />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </ModalBody>

                <ModalFooter paddingBottom='24px'>
                    <Button variant='solid' {...BUTTON_MAIN_STYLE}>Sign in</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default React.memo(ModalLogin)