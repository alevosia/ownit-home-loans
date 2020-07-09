import React from 'react'

// constants
import { Colors, URLs } from '../../constants'

// components
import Section from '../Section'
import FullBackground from '../FullBackground'
import DownloadButton from '../DownloadButton/DownloadButton.component'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Documents: React.FC = () => {
    return (
        <Section style={{ minHeight: 'unset', padding: '30px 15px', color: Colors.WHITE }}>
            <FullBackground color={Colors.LIGHT_BLUE} />
            <Container>
                <Row className="flex-wrap">
                    <Col xs={12} md={6} lg={4} className="mb-3">
                        <DownloadButton label={'FAQs'} fileUrl={URLs.FAQS} />
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-3">
                        <DownloadButton label={'Privacy Policy'} fileUrl={URLs.PRIVACY_POLICY} />
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-3">
                        <DownloadButton
                            label={'Website Terms and Conditions'}
                            fileUrl={URLs.WEBSITE_TERMS_AND_CONDITIONS}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-3 mb-lg-0 ml-lg-auto">
                        <DownloadButton
                            label={'Compliments and Concerns'}
                            fileUrl={URLs.COMPLIMENTS_AND_CONCERNS}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mx-md-auto ml-lg-0 mr-auto">
                        <DownloadButton
                            label={'Collection Notification Statement'}
                            fileUrl={URLs.COLLECTION_NOTIFICATION_STATEMENT}
                        />
                    </Col>
                </Row>
                <Row className="flex-column mt-4">
                    <Col className="text-center">
                        Ownit Home Loans Australia Pty Ltd ABN 39 636 897 320 T/as Ownit Home Loans
                    </Col>
                    <Col className="text-center">
                        Credit Representative Number 523065 of Australian Credit License Number
                        389328
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Documents
