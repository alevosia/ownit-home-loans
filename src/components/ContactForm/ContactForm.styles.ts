import styled, { css } from 'styled-components'
import { Colors, FontSizes, Breakpoints } from '../../constants'
import { ButtonStyles } from '../CallToAction/CallToAction.component'

export const Wrapper = styled.div`
    height: auto;
    width: 100%;
    max-width: ${Breakpoints.TABLET}px;
    margin: 0 auto;
    padding: 15px;
    text-align: center;

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        padding: 30px;
    }

    @media only screen and (min-width: ${Breakpoints.WIDE_DESKTOP}px) {
        padding: 45px;
    }
`

const inputStyles = css`
    height: auto;
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    font-weight: normal;
    background-color: ${Colors.DARK_BLUE};
    color: ${Colors.WHITE};
    font-size: ${FontSizes.BIG};
    border: none;
    border-radius: 5px;
    outline: none;
    letter-spacing: 2px;
    padding: 10px 15px;

    &:focus {
        box-shadow: 0px 2px 6px ${Colors.LIGHT_BLUE};
    }

    &::placeholder {
        color: ${Colors.WHITE};
        opacity: 0.75;
    }
`

export const Input = styled.input`
    ${inputStyles}
    margin-bottom: 15px;
`

export const Textarea = styled.textarea`
    ${inputStyles}
    display: block;
    min-height: 300px;
`

export const Submit = styled.button`
    ${ButtonStyles}
    margin-top: 15px;
    width: 100%;
    max-width: 550px;
    text-transform: uppercase;
    font-size: ${FontSizes.BIG};
    letter-spacing: 2px;
`
