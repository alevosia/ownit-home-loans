import React from 'react'

// constants
import { Colors } from '../../constants'

// assets
import FindingHome from '../../assets/finding_home.jpeg'

// components
import Section from '../Section'
import SplitBackground from '../SplitBackground'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Heading, RoundImageWrapper, Mission } from './WhyChooseUs.styles'

const WhyChooseUs: React.FC = () => {
    return (
        <Section id="about" flexed={true} direction="column" centered={true} height="100%">
            <SplitBackground
                direction="to bottom"
                firstColor={Colors.DARK_BLUE}
                secondColor={Colors.WHITE}
            />
            <Container className="h-100">
                <Row className="h-100 flex-column flex-md-row">
                    <Col
                        md={{ span: 6, order: 2 }}
                        className="d-flex align-items-center justify-content-center"
                        style={{ flex: 1 }}
                    >
                        <RoundImageWrapper>
                            <img src={FindingHome} alt="home keys" />
                        </RoundImageWrapper>
                    </Col>

                    <Col md={6} style={{ flex: 1 }}>
                        <Row className="flex-column h-100 align-items-center justify-content-center">
                            <Col className="d-md-flex flex-grow-0 flex-md-grow-1 align-items-md-end">
                                <Heading className="text-center text-md-left mb-3 mb-lg-5">
                                    Why Choose <strong>OWNit?</strong>
                                </Heading>
                            </Col>
                            <Col className="flex-grow-0 flex-md-grow-1">
                                <Mission className="mt-md-3 mt-lg-5">
                                    The professionals at OWNit offer services for property
                                    conveyancing works at some of the cheapest prices in both the
                                    Gold Coast and Brisbane.
                                </Mission>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default WhyChooseUs
