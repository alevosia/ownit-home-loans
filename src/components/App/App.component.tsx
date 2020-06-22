import React from 'react'
import { Wrapper } from './App.styles'

// pages
import FormPage from '../../pages/Form/Form.page'

const App: React.FC = () => {
    return (
        <Wrapper id="App">
            <FormPage />
        </Wrapper>
    )
}

export default App
