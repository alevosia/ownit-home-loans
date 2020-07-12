import { useState, useEffect } from 'react'
import {
    LoanRepaymentCalculator,
    StampDutyCalculator,
    BorrowingPowerCalculator,
    BudgetPlanner,
    LoanComparisonCalculator
} from '../constants/calculators'

export const useCalculators = (): Calculator[] => {
    const [calculators, setCalculators] = useState<Calculator[]>([])

    useEffect(() => {
        setCalculators([
            LoanRepaymentCalculator,
            StampDutyCalculator,
            BorrowingPowerCalculator,
            BudgetPlanner,
            LoanComparisonCalculator
        ])
    }, [])

    return calculators
}
