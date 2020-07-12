import React from 'react'

import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import Drawer from '../components/Drawer/Drawer.component'
import Form from '../components/Form/Form.component'

const FormPage: React.FC = () => {
    return (
        <Page id="FormPage">
            <Navigation transparent={false} />
            <Drawer />
            <Form />
        </Page>
    )
}

export default FormPage
