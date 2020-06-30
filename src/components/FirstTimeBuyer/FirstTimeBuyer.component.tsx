import React from 'react'

// constants
import { Colors } from '../../constants'

// assets
import CoupleHome from '../../assets/couple_home.jpeg'

// components
import Section from '../Section'
import SplitBackground from '../SplitBackground'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Heading, RoundImageWrapper, Mission } from './FirstTimeBuyer.styles'

const FirstTimeBuyer: React.FC = () => {
    return (
        <Section id="FirstTimeBuyer" flexed={true} direction="column" centered={true} height="100%">
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
                            <img src={CoupleHome} alt="home keys" />
                        </RoundImageWrapper>
                    </Col>
                    <Col md={6} style={{ flex: 1 }}>
                        <Row className="flex-column h-100 align-items-center justify-content-center">
                            <Col className="d-md-flex flex-grow-0 flex-md-grow-1 align-items-md-end">
                                <Heading className="text-center text-md-left mb-2 mb-lg-5">
                                    First Time Buyer
                                </Heading>
                            </Col>
                            <Col className="flex-grow-0 flex-md-grow-1">
                                <Mission className="mt-md-3 mt-lg-5">
                                    The great Aussie dream is to own your home; however, the first
                                    step is often the hardest. That is where Ownit Home Loans will
                                    assist you through the process and provide you with peace of
                                    mind.
                                </Mission>
                                <Mission className="mt-3">
                                    Our brokers understand the journey for a first home buyer, and
                                    we will work for you throughout the entire journey, providing
                                    you with options that are right for your circumstances.
                                </Mission>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default FirstTimeBuyer
