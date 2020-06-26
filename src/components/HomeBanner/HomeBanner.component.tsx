import React from 'react'

import Section from '../Section'
import FullBackground from '../FullBackground'

const bgImageUrl =
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/' +
    'suburban-house-royalty-free-image-1584972559.jpg'

const HomeBanner: React.FC = () => {
    return (
        <Section flexed={true} direction="column" centered={true} height="100%" id="HomeBanner">
            <FullBackground imageUrl={bgImageUrl} size="cover" fixed={true} blur="3px" />
            <h1>Home Banner</h1>
        </Section>
    )
}

export default HomeBanner
