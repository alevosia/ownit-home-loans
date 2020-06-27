import React from 'react'

// assets
import Telephone from '../../assets/phone-alt-solid.svg'
import Envelope from '../../assets/envelope-solid.svg'
import MapMarker from '../../assets/map-marker-alt-solid.svg'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Wrapper, Heading, Icon } from './Footer.styles'

const Footer: React.FC = () => {
    return (
        <Wrapper id="footer">
            <Container>
                <Row>
                    <Col>
                        <Heading>Contact Us</Heading>
                        <Row>
                            <Col>
                                <Icon src={Telephone} />
                                1300 553 750
                            </Col>
                            <Col>
                                <Icon src={Envelope} />
                                info@ownit.com.au
                            </Col>
                            <Col>
                                <Icon src={MapMarker} />
                                OWNit Conveyancing Beenleigh 71 Alamein Street Beenleigh QLD 4207
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Footer
