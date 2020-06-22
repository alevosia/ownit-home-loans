import React from 'react'

import { Wrapper } from './Form.styles'

import Navigation from '../../components/Navigation/Navigation.component'
import Form from '../../components/Form/Form.component'

const FormPage: React.FC = () => {
    return (
        <Wrapper id="FormPage">
            <Navigation />
            <Form />
        </Wrapper>
    )
}

export default FormPage
