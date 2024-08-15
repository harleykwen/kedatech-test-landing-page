import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const LandingLayout: React.FC = () => {
    return (
        <Flex direction='column'>
            <Header />
            <Outlet />
            <Footer />
        </Flex>
    )
}

export default LandingLayout