import React from 'react'
import { 
    Button, 
    Container, 
    Flex, 
    FormControl, 
    FormLabel, 
    Grid, 
    GridItem, 
    Input, 
    Text, 
} from '@chakra-ui/react'

const Contact: React.FC = () => {
    const BUTTON_PLAN_STYLE = {
        fontSize: '14px',
        color: '#E6E9F5',
        fontWeight: '600',
        padding: '16px 24px',
        borderRadius: '4px',
        backgroundColor: '#252430',
        height: '52px',
        marginTop: '2rem',
        _hover: {
            backgroundColor: '#3a3944'
        },
        _focus: {
            backgroundColor: '#121218'
        },
        _active: {
            backgroundColor: '#121218'
        },
    }

    return (
        <Flex>
            <Container padding='108px 12px' maxWidth='container.xl'>
                <Text
                    color='#252430'
                    fontWeight='700'
                    fontSize='24px'
                >Connect with our sales consultants</Text>
                <Text
                    color='#858BA0'
                    fontWeight='300'
                    fontSize='14px'
                >Fill out this form and someone from our team will be in touch</Text>

                <Grid
                    gridTemplateColumns={{
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }}
                    gridGap='1rem'
                    marginTop='2rem'
                >
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>First Name</FormLabel>
                            <Input type='text' fontSize='14px' />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Last Name</FormLabel>
                            <Input type='text' fontSize='14px' />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Email</FormLabel>
                            <Input type='email' fontSize='14px' />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Phone Number</FormLabel>
                            <Input type='number' fontSize='14px' />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Organization Name</FormLabel>
                            <Input type='text' fontSize='14px' />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Number Of Employees</FormLabel>
                            <Input type='number' fontSize='14px' />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Business Email</FormLabel>
                            <Input type='text' fontSize='14px' />
                        </FormControl>
                    </GridItem>
                </Grid>

                <Button {...BUTTON_PLAN_STYLE}>Submit</Button>
            </Container>
        </Flex>
    )
}

export default React.memo(Contact)