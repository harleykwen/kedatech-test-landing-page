import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const LandingLayout: React.FC = () => {
    const [isOnTop, setIsOnTop] = useState<boolean>(true)

    const navbarControl = () => {
        if (window.scrollY > 1) {
            setIsOnTop(false)
        } else {
            setIsOnTop(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarControl)
        return () => window.removeEventListener('scroll', navbarControl)
    }, [])

    return (
        <Flex direction='column'>
            <Header isOnTop={isOnTop} />
            <Outlet />
            <Footer />
        </Flex>
    )
}

export default LandingLayout