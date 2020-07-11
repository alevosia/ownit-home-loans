import { calculatorConstants } from '../constants/calculators'
import axios from 'axios'

axios.defaults.adapter = require('axios/lib/adapters/http')

describe('Calculators', () => {
    describe('Responds with status 200', () => {
        for (const key in calculatorConstants) {
            const calc = calculatorConstants[key]

            test(calc.name, async () => {
                const response = await axios.get(calc.src)
                expect(response.status).toEqual(200)
            })
        }
    })

    describe('Name and id matches', () => {
        for (const key in calculatorConstants) {
            const calc = calculatorConstants[key]

            test(calc.name, () => {
                expect(calc.id.replace(/_/g, ' ')).toEqual(calc.name)
            })
        }
    })
})
