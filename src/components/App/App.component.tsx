import React from 'react'
import { Wrapper } from './App.styles'
import { Switch, Route } from 'react-router-dom'

// pages
import HomePage from '../../pages/Home'
import FormPage from '../../pages/Form'

const App: React.FC = () => {
    return (
        <Wrapper id="App">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/form">
                    <FormPage />
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default App
