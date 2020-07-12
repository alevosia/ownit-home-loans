import React, { useState } from 'react'

// constants
import {
    LoanRepaymentCalculator,
    StampDutyCalculator,
    BorrowingPowerCalculator,
    BudgetPlanner,
    LoanComparisonCalculator
} from '../../constants/calculators'

// styled components
import { Button, CalculatorContainer } from './Calculators.styles'

// react bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Calculators: React.FC = () => {
    const [selectedCalculator, setselectedCalculator] = useState<Calculator | null>(null)

    return (
        <Container className="p-3 p-lg-5">
            {/* <Title className="mt-3 mt-md-5 mb-3">Calculators</Title> */}
            {selectedCalculator ? (
                <CalculatorContainer>
                    <Button className="mb-3" onClick={() => setselectedCalculator(null)}>
                        Close
                    </Button>
                    <iframe
                        className="VisiCalcClass"
                        id={selectedCalculator.id}
                        src={selectedCalculator.src}
                        title={selectedCalculator.name}
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                    <Button onClick={() => setselectedCalculator(null)}>Close</Button>
                </CalculatorContainer>
            ) : (
                <Row className="flex-column">
                    <Col className="text-center mb-3">
                        <Button onClick={() => setselectedCalculator(BudgetPlanner)}>
                            {BudgetPlanner.name}
                        </Button>
                    </Col>
                    <Col className="text-center mb-3">
                        <Button onClick={() => setselectedCalculator(LoanRepaymentCalculator)}>
                            {LoanRepaymentCalculator.name}
                        </Button>
                    </Col>
                    <Col className="text-center mb-3">
                        <Button onClick={() => setselectedCalculator(StampDutyCalculator)}>
                            {StampDutyCalculator.name}
                        </Button>
                    </Col>
                    <Col className="text-center mb-3">
                        <Button onClick={() => setselectedCalculator(BorrowingPowerCalculator)}>
                            {BorrowingPowerCalculator.name}
                        </Button>
                    </Col>
                    <Col className="text-center">
                        <Button onClick={() => setselectedCalculator(LoanComparisonCalculator)}>
                            {LoanComparisonCalculator.name}
                        </Button>
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default Calculators
