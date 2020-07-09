import React from 'react'

// constants
import { Colors } from '../../constants'

// assets
import Calculation from '../../assets/calculation.jpeg'

// components
import Section from '../Section'
import SplitBackground from '../SplitBackground'
import CallToAction from '../CallToAction/CallToAction.component'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Heading, RoundImageWrapper, Mission } from './Refinancing.styles'

const Refinancing: React.FC = () => {
    return (
        <Section id="Refinancing" flexed={true} direction="column" centered={true} height="100%">
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
                        <Row className="flex-column align-items-center justify-content-center">
                            <Col>
                                <RoundImageWrapper>
                                    <img src={Calculation} alt="calculation" />
                                </RoundImageWrapper>
                            </Col>
                            <Col className="d-none d-md-block text-center mt-3">
                                <CallToAction to="/form">Let&apos;s Talk About It</CallToAction>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} style={{ flex: 1 }}>
                        <Row className="flex-column h-100 align-items-center justify-content-center">
                            <Col className="d-md-flex flex-grow-0 flex-md-grow-1 align-items-md-end">
                                <Heading className="text-center text-md-left mb-2 mb-lg-5">
                                    Refinancing
                                </Heading>
                            </Col>
                            <Col className="flex-grow-0 flex-md-grow-1">
                                <Mission className="mt-md-3 mt-lg-5">
                                    During our life’s journey our circumstances can change. Home
                                    renovations, investigating whether your current home loan fits
                                    your needs, or you require financial relief and Ownit Home Loans
                                    is here to help.
                                </Mission>
                                <CallToAction to="/form" className="mt-3 d-md-none">
                                    Let&apos;s Talk About It
                                </CallToAction>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Refinancing
