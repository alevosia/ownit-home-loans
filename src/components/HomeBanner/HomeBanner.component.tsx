import React from 'react'

// contants
import { Colors } from '../../constants'

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
import { Heading, LinksWrapper, LinkButton } from './HomeBanner.styles'

const HomeBanner: React.FC = () => {
    return (
        <Section
            id="banner"
            flexed={true}
            direction="column"
            centered={true}
            height="100%"
            style={{ maxHeight: 'unset', minHeight: '550px' }}
        >
            <FullBackground imageUrl={HomeKeys} size="cover" fixed={true} blur="3px" />
            <Container>
                <Row>
                    <Col className="d-none d-md-block"></Col>
                    <Col className="text-center text-md-left">
                        <Heading className="mb-5" data-aos="fade-down">
                            We are here to help you...{' '}
                            <strong>
                                OWN<span style={{ color: Colors.RED }}>i</span>
                                <span style={{ color: Colors.LIGHT_BLUE }}>t</span>
                            </strong>
                        </Heading>
                        <LinksWrapper data-aos="fade-in" data-aos-delay="1000">
                            <LinkButton href="#FirstTimeBuyer">FIRST TIME BUYER</LinkButton>
                            <LinkButton href="#Upgrading">UPGRADING</LinkButton>
                            <LinkButton href="#Refinancing">REFINANCING</LinkButton>
                            <LinkButton href="#Investing">INVESTING</LinkButton>
                        </LinksWrapper>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default HomeBanner
