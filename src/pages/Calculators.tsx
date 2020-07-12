import React from 'react'

// styles
import '../styles/calculators.css'

// effects
import { useCalculators } from '../effects/calculators'

// components
import Page from '../components/Page'
import Navigation from '../components/Navigation/Navigation.component'
import Drawer from '../components/Drawer/Drawer.component'
// import Calculator from '../../components/Calculator'

// react bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CalculatorsPage: React.FC = () => {
    const calculators = useCalculators()

    function renderCalculators() {
        return calculators.map(({ id, name }) => (
            <Col xs={12} md={6} lg={4} key={id} className="text-center">
                <button>{name}</button>
                {/* <Calculator id={id} name={name} src={src} />{' '} */}
            </Col>
        ))
    }

    return (
        <Page>
            <Navigation transparent={false} />
            <Drawer />
            <Container>
                <h1 className="text-center">Calculators</h1>

                <Row>{calculators.length > 0 ? renderCalculators() : 'Loading...'}</Row>
            </Container>
        </Page>
    )
}

export default CalculatorsPage
