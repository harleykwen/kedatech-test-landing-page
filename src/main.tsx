import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './theme/theme.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import RouteProvider from './router/RouteProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouteProvider>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </RouteProvider>
    </React.StrictMode>,
)
