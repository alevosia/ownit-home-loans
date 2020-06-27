import React from 'react'

// assets
import HomeKeys from '../../assets/home_keys.jpeg'

// components
import Section from '../Section'
import FullBackground from '../FullBackground'

// bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

// styles
import { Heading, LinkButton } from './HomeBanner.styles'

const HomeBanner: React.FC = () => {
    return (
        <Section id="banner" flexed={true} direction="column" centered={true} height="100%">
            <FullBackground imageUrl={HomeKeys} size="cover" fixed={true} blur="3px" />
            <Container>
                <Row>
                    <Col className="d-none d-md-block"></Col>
                    <Col className="text-center text-md-left">
                        <Heading className="mb-5">
                            Learn how to home loan the <strong>smart way</strong>.
                        </Heading>
                        <LinkButton href="#about">KNOW MORE</LinkButton>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default HomeBanner
