import React from 'react'

// components
import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import Drawer from '../components/Drawer/Drawer.component'
import PageTitle from '../components/PageTitle/PageTitle.component'
import ContactForm from '../components/ContactForm/ContactForm.component'
import Footer from '../components/Footer/Footer.component'

const ContactUsPage: React.FC = () => {
    return (
        <Page className="d-flex flex-column">
            <Navigation transparent={false} />
            <Drawer />
            <PageTitle title={'Contact Us'} />
            <ContactForm />
            <Footer />
        </Page>
    )
}

export default ContactUsPage
