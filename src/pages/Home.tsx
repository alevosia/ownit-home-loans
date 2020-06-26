import React from 'react'

import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import HomeBanner from '../components/HomeBanner/HomeBanner.component'
import AboutUs from '../components/AboutUs/AboutUs.component'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.component'
import Footer from '../components/Footer/Footer.component'

const HomePage: React.FC = () => {
    return (
        <Page>
            <Navigation fixed={true} transparent={true} />
            <HomeBanner />
            <AboutUs />
            <WhyChooseUs />
            <Footer />
        </Page>
    )
}

export default HomePage
