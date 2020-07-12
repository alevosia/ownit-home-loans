import React from 'react'
import { Wrapper } from './App.styles'

import { Routes } from '../../routes'
import { DrawerProvider } from '../../contexts/drawer'

const App: React.FC = () => {
    return (
        <Wrapper id="App">
            <DrawerProvider>
                <Routes />
            </DrawerProvider>
        </Wrapper>
    )
}

export default App
