import React from 'react'

import { Colors } from '../../constants'

import Section from '../Section'
import SplitBackground from '../SplitBackground'

const WhyChooseUs: React.FC = () => {
    return (
        <Section flexed={true} direction="column" centered={true} height="100%">
            <SplitBackground
                direction="to bottom"
                firstColor={Colors.DARK_BLUE}
                secondColor={Colors.WHITE}
            />
            <h2 style={{ color: 'black' }}>Why Choose OWNit?</h2>
        </Section>
    )
}

export default WhyChooseUs
