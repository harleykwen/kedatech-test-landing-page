import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import { Flex } from '@chakra-ui/react'

const Landing: React.FC = () => {
    return (
        <Flex direction='column'>
            <Hero />
            <About />
            <Pricing />
            <Contact />
        </Flex>
    )
}

export default Landing