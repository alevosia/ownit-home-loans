import { useState, useEffect } from 'react'
import { calculatorConstants } from '../constants/calculators'

export const useCalculators = (): Calculator[] => {
    const [calculators, setCalculators] = useState<Calculator[]>([])

    useEffect(() => {
        const calcsArray: Calculator[] = []

        for (const key in calculatorConstants) {
            calcsArray.push(calculatorConstants[key])
        }

        setCalculators(calcsArray)
    }, [])

    return calculators
}
