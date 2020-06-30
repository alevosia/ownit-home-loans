import React from 'react'

// assets
import FBAA from '../../assets/FBAA.png'
// assets
import { ReactComponent as Telephone } from '../../assets/phone-alt-solid.svg'
import { ReactComponent as Envelope } from '../../assets/envelope-solid.svg'
import { ReactComponent as MapMarker } from '../../assets/map-marker-alt-solid.svg'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// styles
import { Wrapper, Info, FooterImageWrapper } from './Footer.styles'

const Footer: React.FC = () => {
    return (
        <Wrapper id="footer">
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col xs={12} md={{ span: 4, order: 1 }} className="mb-3 mb-md-0">
                                <MapMarker className="icon" />
                                <Info>
                                    OWNit Conveyancing Beenleigh 71 Alamein Street Beenleigh QLD
                                    4207
                                </Info>
                            </Col>
                            <Col xs={6} md={{ span: 4, order: 0 }}>
                                <Telephone className="icon" />
                                <Info>1300 553 750</Info>
                            </Col>

                            <Col xs={6} md={{ span: 4, order: 2 }}>
                                <Envelope className="icon" />
                                <Info>info@ownit.com.au</Info>
                            </Col>
                        </Row>
                        <FooterImageWrapper>
                            <img src={FBAA} alt="FBAA logo" />
                        </FooterImageWrapper>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Footer
