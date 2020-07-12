import React from 'react'

// styles
import '../styles/calculators.css'

// components
import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import Drawer from '../components/Drawer/Drawer.component'
import Calculators from '../components/Calculators/Calculators.component'
import Footer from '../components/Footer/Footer.component'

const CalculatorsPage: React.FC = () => {
    return (
        <Page className="d-flex flex-column">
            <Navigation transparent={false} />
            <Drawer />
            <Calculators />
            <Footer />
        </Page>
    )
}

export default CalculatorsPage
