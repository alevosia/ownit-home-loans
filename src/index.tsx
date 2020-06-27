import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { GlobalStyle } from './GlobalStyle'

import App from './components/App/App.component'

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
