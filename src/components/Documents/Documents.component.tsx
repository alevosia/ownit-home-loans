import React from 'react'

// constants
import { Colors, URLs } from '../../constants'

// styled
import { Text } from './Documents.styles'

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
                    <Col xs={12} md={6} className="mb-3">
                        <DownloadButton label={'Privacy Policy'} fileUrl={URLs.PRIVACY_POLICY} />
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <DownloadButton
                            label={'Terms and Conditions'}
                            fileUrl={URLs.WEBSITE_TERMS_AND_CONDITIONS}
                        />
                    </Col>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <DownloadButton
                            label={'Compliments and Concerns'}
                            fileUrl={URLs.COMPLIMENTS_AND_CONCERNS}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <DownloadButton
                            label={'Collection Notification Statement'}
                            fileUrl={URLs.COLLECTION_NOTIFICATION_STATEMENT}
                        />
                    </Col>
                </Row>
                <Row className="flex-column mt-4">
                    <Col className="text-center mb-1">
                        <Text>
                            Ownit Home Loans Australia Pty Ltd ABN 39 636 897 320 T/as Ownit Home
                            Loans
                        </Text>
                    </Col>
                    <Col className="text-center mb-1">
                        <Text>
                            Credit Representative 523065 is authorised under Australian Credit
                            Licence 389328
                        </Text>
                    </Col>
                    <Col className="text-center">
                        <Text>
                            Disclaimer: Your full financial situation would need to be reviewed
                            prior to acceptance of any offer or product
                        </Text>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Documents
