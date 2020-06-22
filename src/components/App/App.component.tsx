import React from 'react'
import { AppWrapper } from './App.styles'

// pages
import FormPage from '../../pages/Form/Form.page'

const App: React.FC = () => {
    return (
        <AppWrapper id="App">
            <FormPage />
        </AppWrapper>
    )
}

export default App
