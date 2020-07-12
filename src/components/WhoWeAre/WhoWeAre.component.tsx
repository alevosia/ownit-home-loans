import React from 'react'

// constants
import { Colors } from '../../constants'

// assets
import MiniatureHome from '../../assets/miniature_home.jpeg'

// components
import Section from '../Section'
import SplitBackground from '../SplitBackground'
import CallToAction from '../CallToAction/CallToAction.component'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Heading, RoundImageWrapper, Mission } from './WhoWeAre.styles.'

const WhoWeAre: React.FC = () => {
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
                                <Heading className="text-center mb-3 mb-lg-5">Who We Are</Heading>
                            </Col>
                            <Col className="flex-grow-0 flex-md-grow-1">
                                <Mission className="mt-md-3 mt-lg-5">
                                    <strong>Our mission</strong> through great customer service and
                                    strong industry relationships is to create raving fans. We work
                                    personally with each and every client to find the right loan for
                                    them.
                                </Mission>
                                <CallToAction to="/form" className="mt-3 d-md-none">
                                    Get Started
                                </CallToAction>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default WhoWeAre
