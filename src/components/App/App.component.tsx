import React from 'react'
import { Wrapper } from './App.styles'
import { Switch, Route } from 'react-router-dom'

import { DrawerProvider } from '../../contexts/drawer'

// pages
import HomePage from '../../pages/Home'
import FormPage from '../../pages/Form'
import CalculatorsPage from '../../pages/Calculators'

const App: React.FC = () => {
    return (
        <Wrapper id="App">
            <DrawerProvider>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/form">
                        <FormPage />
                    </Route>
                    <Route exact path="/calculators">
                        <CalculatorsPage />
                    </Route>
                </Switch>
            </DrawerProvider>
        </Wrapper>
    )
}

export default App
