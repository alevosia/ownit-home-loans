import React from 'react'

import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import Drawer from '../components/Drawer/Drawer.component'
import Form from '../components/Form/Form.component'
import Footer from '../components/Footer/Footer.component'

const FormPage: React.FC = () => {
    return (
        <Page id="FormPage" className="h-100 d-flex flex-column">
            <Navigation transparent={false} />
            <Drawer />
            <Form />
            <Footer />
        </Page>
    )
}

export default FormPage
