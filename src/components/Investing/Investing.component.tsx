import React from 'react'

// constants
import { Colors } from '../../constants'

// assets
import Investment from '../../assets/investment.jpeg'

// components
import Section from '../Section'
import SplitBackground from '../SplitBackground'
import CallToAction from '../CallToAction/CallToAction.component'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Heading, RoundImageWrapper, Description } from './Investing.styles'

const Investing: React.FC = () => {
    return (
        <Section id="Investing" flexed={true} direction="column" centered={true} height="100%">
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
                        <Row className="flex-column align-items-center justify-content-center">
                            <Col>
                                <RoundImageWrapper>
                                    <img src={Investment} alt="investment" />
                                </RoundImageWrapper>
                            </Col>
                            <Col className="d-none d-md-block text-center mt-3">
                                <CallToAction to="/contact">
                                    Let&apos;s Manage Your
                                    <br />
                                    Investment
                                </CallToAction>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} style={{ flex: 1 }}>
                        <Row className="flex-column h-100 align-items-center justify-content-center">
                            <Col className="d-md-flex flex-grow-0 flex-md-grow-1 align-items-md-end">
                                <Heading className="text-center text-md-left mb-2 mb-lg-5">
                                    Investing
                                </Heading>
                            </Col>
                            <Col className="flex-grow-0 flex-md-grow-1">
                                <Description className="mt-md-3 mt-lg-5">
                                    Whether you are an experienced investor, or this is your first
                                    step, Ownit Home Loans can deliver the right investment loan to
                                    fit your circumstances.
                                </Description>
                                <CallToAction to="/contact" className="mt-3 d-md-none">
                                    Let&apos;s Manage Your Investment
                                </CallToAction>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Investing
