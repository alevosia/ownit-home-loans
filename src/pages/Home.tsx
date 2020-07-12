import React from 'react'

import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import Drawer from '../components/Drawer/Drawer.component'
import HomeBanner from '../components/HomeBanner/HomeBanner.component'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre.component'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.component'
import Footer from '../components/Footer/Footer.component'
import FirstTimeBuyer from '../components/FirstTimeBuyer/FirstTimeBuyer.component'
import Refinancing from '../components/Refinancing/Refinancing.component'
import Investing from '../components/Investing/Investing.component'
import Upgrading from '../components/Upgrading/Upgrading.component'
import Documents from '../components/Documents/Documents.component'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop.component'

const HomePage: React.FC = () => {
    return (
        <Page>
            <Navigation fixed={true} transparent={true} />
            <Drawer />
            <HomeBanner />
            <WhoWeAre />
            <WhyChooseUs />
            <FirstTimeBuyer />
            <Refinancing />
            <Investing />
            <Upgrading />
            <Documents />
            <ScrollToTop />
            <Footer />
        </Page>
    )
}

export default HomePage
