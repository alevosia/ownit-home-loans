import React /*, { useState }*/ from 'react'
// import { ThemeProvider } from 'styled-components'
import { AppWrapper } from './App.styles'

// pages
import FormPage from '../../pages/Form/Form.page'

const App: React.FC = () => {
    // const [theme, setTheme] = useState<AppTheme>({ mode: 'light' })

    // function changeTheme() {
    //     setTheme({ mode: theme.mode === 'light' ? 'dark' : 'light' })
    // }

    return (
        // <ThemeProvider theme={theme}>
        <AppWrapper id="App">
            <FormPage />
        </AppWrapper>
        // </ThemeProvider>
    )
}

export default App
