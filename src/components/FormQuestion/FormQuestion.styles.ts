import styled from 'styled-components'
import { DARK_BLUE } from '../../constants'

export const FormQuestionWrapper = styled.div`
    height: auto;
    width: auto;
`

export const FormBody = styled.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
`

export const FormInputsWrapper = styled.div`
    height: auto;
    width: auto;
    text-align: center;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const Submit = styled.span`
    cursor: pointer;
    color: ${DARK_BLUE};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 125px;
`
