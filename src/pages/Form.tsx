import React from 'react'

import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import Form from '../components/Form/Form.component'

const FormPage: React.FC = () => {
    return (
        <Page id="FormPage">
            <Navigation transparent={false} />
            <Form />
        </Page>
    )
}

export default FormPage
