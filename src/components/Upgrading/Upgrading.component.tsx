import React from 'react'

// constants
import { Colors } from '../../constants'

// assets
import HousePlan from '../../assets/plans.jpeg'

// components
import Section from '../Section'
import SplitBackground from '../SplitBackground'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Heading, RoundImageWrapper, Mission } from './Upgrading.styles'

const Upgrading: React.FC = () => {
    return (
        <Section id="Upgrading" flexed={true} direction="column" centered={true} height="100%">
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
                            <img src={HousePlan} alt="home keys" />
                        </RoundImageWrapper>
                    </Col>

                    <Col md={6} style={{ flex: 1 }}>
                        <Row className="flex-column h-100 align-items-center justify-content-center">
                            <Col className="d-md-flex flex-grow-0 flex-md-grow-1 align-items-md-end">
                                <Heading className="text-center text-md-left mb-2 mb-lg-5">
                                    Upgrading
                                </Heading>
                            </Col>
                            <Col className="flex-grow-0 flex-md-grow-1">
                                <Mission className="mt-md-3 mt-lg-5">
                                    We all get that “itch” to upgrade our housing situation.
                                </Mission>
                                <Mission className="mt-md-3">
                                    At Ownit Home Loans with an extensive lender panel, we are
                                    positioned to deliver to you the right loan at the right rate
                                    with the right lender for you.
                                </Mission>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Upgrading
