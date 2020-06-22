import styled from 'styled-components'

import { Colors, FontSizes } from '../../constants'

export const Wrapper = styled.div`
    height: auto;
    width: auto;
`

export const FormBody = styled.form`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
`

export const FormInputsWrapper = styled.div`
    height: auto;
    width: 100%;
    max-width: 320px;
    text-align: center;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const Submit = styled.button`
    cursor: pointer;
    color: ${Colors.DARK_BLUE};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: ${FontSizes.BIG};
    font-weight: bold;
    text-align: center;
    width: 125px;
    border: none;
    background: none;
`
