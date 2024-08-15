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
import useChakraHooks from '../../../hooks/chakra.hooks'

const Contact: React.FC = () => {
    const { BUTTON_MAIN_STYLE, INPUT_VISIBLE_STYLE } = useChakraHooks()

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
                            <Input {...INPUT_VISIBLE_STYLE} />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Last Name</FormLabel>
                            <Input {...INPUT_VISIBLE_STYLE} />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Email</FormLabel>
                            <Input {...INPUT_VISIBLE_STYLE} />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Phone Number</FormLabel>
                            <Input {...INPUT_VISIBLE_STYLE} />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Organization Name</FormLabel>
                            <Input {...INPUT_VISIBLE_STYLE} />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Number Of Employees</FormLabel>
                            <Input {...INPUT_VISIBLE_STYLE} />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl>
                            <FormLabel color='#252430' fontSize='14px'>Business Email</FormLabel>
                            <Input {...INPUT_VISIBLE_STYLE} />
                        </FormControl>
                    </GridItem>
                </Grid>

                <Button 
                    {...BUTTON_MAIN_STYLE} 
                    height='52px' 
                    marginTop='2rem' 
                    width='max-content'
                >Submit</Button>
            </Container>
        </Flex>
    )
}

export default React.memo(Contact)