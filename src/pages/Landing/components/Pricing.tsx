import React from 'react'
import { IoCloseCircle, IoShieldCheckmark } from 'react-icons/io5'
import { 
    Button,
    Center,
    Container,
    Flex, 
    Icon, 
    Table, 
    TableContainer, 
    Tbody, 
    Td, 
    Text, 
    Tr, 
} from '@chakra-ui/react'

interface IPackage {
    price: string
    package: string
    subscriptionType: string
    incomingGoods: boolean
    outcomingGoods: boolean
    profitResult: boolean
    analyzeSalesChart: boolean
    fullSupport: boolean
    exportExcel: boolean
    aiEarningPredict: boolean
}

interface IPackagePrivilage {
    label: string
    key: string
}

const Pricing: React.FC = () => {
    const BUTTON_PLAN_STYLE = {
        width: '100%',
        fontSize: '14px',
        color: '#E6E9F5',
        fontWeight: '600',
        padding: '16px 24px',
        borderRadius: '4px',
        backgroundColor: '#252430',
        height: '52px',
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

    const PACKAGE_PRIVILAGES: IPackagePrivilage[] = [
        {
            label: "Record incoming goods",
            key: 'incomingGoods'
        },
        {
            label: "Record outcoming goods",
            key: 'outcomingGoods'
        },
        {
            label: "Record profit results",
            key: 'profitResult'
        },
        {
            label: "Analyze sales results with diagrams",
            key: 'analyzeSalesChart'
        },
        {
            label: "Support 7x24 Hours",
            key: 'fullSupport'
        },
        {
            label: "Export data to Excel",
            key: 'exportExcel'
        },
        {
            label: "AI Earning prediction",
            key: 'aiEarningPredict'
        },
    ]

    const PACKAGES: IPackage[] = [
        {
            price: 'Free',
            package: 'Basic',
            subscriptionType: 'Lifetime',
            incomingGoods: true,
            outcomingGoods: true,
            profitResult: true,
            analyzeSalesChart: false,
            fullSupport: false,
            exportExcel: false,
            aiEarningPredict: false,
        },
        {
            price: '$25',
            package: 'Business',
            subscriptionType: 'Month',
            incomingGoods: true,
            outcomingGoods: true,
            profitResult: true,
            analyzeSalesChart: true,
            fullSupport: true,
            exportExcel: false,
            aiEarningPredict: false,
        },
        {
            price: '$40',
            package: 'Entrepreneur',
            subscriptionType: 'Month',
            incomingGoods: true,
            outcomingGoods: true,
            profitResult: true,
            analyzeSalesChart: true,
            fullSupport: true,
            exportExcel: true,
            aiEarningPredict: true,
        },
    ]

    return (
        <Flex
            // minHeight='100vh'
            // justifyContent='center'
            // alignItems='center'
        >
            <Container padding='36px 12px' maxWidth='container.xl'>
                <TableContainer marginX='auto'>
                    <Table variant='simple'>
                        <Tbody>
                            <Tr>
                                <Td padding='0px'>
                                    <Flex 
                                        padding='46px 32px' 
                                        direction='column' 
                                        gap='12px'
                                    >
                                        <Flex alignItems='center' gap='16px'>
                                            <Text
                                                color='#252430'
                                                fontWeight='700'
                                                fontSize='24px'
                                            >Compare plans</Text>
                                            <Center 
                                                padding='10px 20px' 
                                                borderRadius='50px' 
                                                borderWidth='1px' 
                                                borderColor='#858BA0'
                                            >
                                                <Text
                                                    color='#252430'
                                                    fontSize='16px'
                                                    fontWeight='400'
                                                >40% Off</Text>
                                            </Center>
                                        </Flex>
                                        <Text
                                            color='#858BA0'
                                            fontWeight='300'
                                            fontSize='14px'
                                        >Choose your ERP plan according to <br /> your organisational plan.</Text>
                                    </Flex>
                                </Td>
                                {PACKAGES?.map((pkg: IPackage, pkgIndex: number) => {
                                    return (
                                        <Td padding='0px' key={pkgIndex}>
                                            <Flex padding='28px' direction='column' gap='1rem' width='250px'>
                                                <Text
                                                    color='#252430'
                                                    fontSize='14px'
                                                    fontWeight='700'
                                                    lineHeight='100%'
                                                >{pkg?.package}</Text>
                                                <Flex alignItems='flex-end' gap='8px'>
                                                    <Text
                                                        color='#252430'
                                                        fontSize='40px'
                                                        fontWeight='700'
                                                        lineHeight='100%'
                                                    >{pkg?.price}</Text>
                                                    <Text
                                                        color='#858BA0'
                                                        fontSize='14px'
                                                        fontWeight='300'
                                                        lineHeight='100%'
                                                        marginBottom='4px'
                                                    >/{pkg?.subscriptionType}</Text>
                                                </Flex>
                                                <Button {...BUTTON_PLAN_STYLE}>Choose This Plan</Button>
                                            </Flex>
                                        </Td>
                                    )
                                })}
                            </Tr>
                            {PACKAGE_PRIVILAGES?.map((pkgPriv: IPackagePrivilage, pkgPrivIndex: number) => {
                                return (
                                    <Tr key={pkgPrivIndex}>
                                        <Td>
                                            <Text
                                                color='#252430'
                                                fontSize='18px'
                                                lineHeight='100%'
                                                fontWeight='400'
                                            >
                                                {pkgPriv?.label}
                                            </Text>
                                        </Td>
                                        {PACKAGES?.map((pkg: IPackage | any, pkgIndex: number) => {
                                            return (
                                                <Td key={pkgIndex} textAlign='center'>
                                                    {pkg[pkgPriv?.key] 
                                                        ?   <Icon as={IoShieldCheckmark} color='green.500' fontSize='24px' /> 
                                                        :   <Icon as={IoCloseCircle} color='red.500' fontSize='24px' /> 
                                                    }
                                                </Td>
                                            )
                                        })}
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </Flex>
    )
}

export default React.memo(Pricing)