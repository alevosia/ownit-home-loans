import React from 'react'
import { Switch, Route } from 'react-router-dom'

// pages
import HomePage from '../pages/Home'
import FormPage from '../pages/Form'
import CalculatorsPage from '../pages/Calculators'

export const Routes: React.FC = () => {
    return (
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
    )
}