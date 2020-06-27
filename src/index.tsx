import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { GlobalStyle } from './GlobalStyle'

import App from './components/App/App.component'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
