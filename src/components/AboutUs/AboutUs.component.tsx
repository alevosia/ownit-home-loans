import React from 'react'

import { Colors } from '../../constants'
import Section from '../Section'
import SplitBackground from '../SplitBackground'

const AboutUs: React.FC = () => {
    return (
        <Section flexed={true} direction="column" centered={true} height="100%">
            <SplitBackground
                direction="to bottom"
                firstColor={Colors.RED}
                secondColor={Colors.WHITE}
            />
            <h2>About Us</h2>
        </Section>
    )
}

export default AboutUs
