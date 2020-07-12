import React from 'react'
import { Wrapper } from './App.styles'

import { Routes } from '../../routes'
import { DrawerProvider } from '../../contexts/drawer'
import { ScrollToTop } from '../../routes'

const App: React.FC = () => {
    return (
        <Wrapper id="App">
            <DrawerProvider>
                <ScrollToTop />
                <Routes />
            </DrawerProvider>
        </Wrapper>
    )
}

export default App
