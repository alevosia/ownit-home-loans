import React from 'react'

import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import Drawer from '../components/Drawer/Drawer.component'
import PageTitle from '../components/PageTitle/PageTitle.component'
import Form from '../components/Form/Form.component'
import Footer from '../components/Footer/Footer.component'

const FormPage: React.FC = () => {
    return (
        <Page id="FormPage" className="d-flex flex-column">
            <Navigation transparent={false} />
            <Drawer />
            <PageTitle title={'Get Started'} />
            <Form />
            <Footer />
        </Page>
    )
}

export default FormPage
