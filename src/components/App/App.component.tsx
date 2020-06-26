import React from 'react'
import { Wrapper } from './App.styles'

// pages
import HomePage from '../../pages/Home'
// import FormPage from '../../pages/Form'

const App: React.FC = () => {
    return (
        <Wrapper id="App">
            <HomePage />
            {/* <FormPage /> */}
        </Wrapper>
    )
}

export default App
