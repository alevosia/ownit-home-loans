import React from 'react'

// constants
import { Colors } from '../../constants'

// assets
import MiniatureHome from '../../assets/miniature_home.jpeg'

// components
import Section from '../Section'
import SplitBackground from '../SplitBackground'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Heading, RoundImageWrapper, Mission } from './AboutUs.styles'

const AboutUs: React.FC = () => {
    return (
        <Section id="about" flexed={true} direction="column" centered={true} height="100%">
            <SplitBackground
                direction="to bottom"
                firstColor={Colors.RED}
                secondColor={Colors.WHITE}
            />
            <Container className="h-100">
                <Row className="h-100 flex-column flex-md-row">
                    <Col
                        md={6}
                        className="d-flex align-items-center justify-content-center"
                        style={{ flex: 1 }}
                    >
                        <RoundImageWrapper>
                            <img src={MiniatureHome} alt="home keys" />
                        </RoundImageWrapper>
                    </Col>

                    <Col md={6} style={{ flex: 1 }}>
                        <Row className="flex-column h-100 align-items-center justify-content-center">
                            <Col className="d-md-flex flex-grow-0 flex-md-grow-1 align-items-md-end">
                                <Heading className="text-center mb-3 mb-lg-5">About Us</Heading>
                            </Col>
                            <Col className="flex-grow-0 flex-md-grow-1">
                                <Mission className="mt-md-3 mt-lg-5">
                                    Ownit Home Loans was established to meet the expectations of
                                    home buyers. For too long have we heard the angst of home buyers
                                    struggling with the home loan.
                                </Mission>
                                <Mission className="mt-3 mt-lg-5">
                                    We understand that purchasing your first or even your third home
                                    is an emotional roller coaster, after all for most of us it is
                                    the biggest financial decision of our entire life.
                                </Mission>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default AboutUs
