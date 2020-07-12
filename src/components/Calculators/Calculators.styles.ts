import styled from 'styled-components'
import { Colors, FontSizes, Breakpoints } from '../../constants'

export const Button = styled.button`
    background: ${Colors.DARK_BLUE};
    color: ${Colors.WHITE};
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    text-align: center;

    &:focus,
    &:hover {
        border: none;
        border-radius: 5px;
        border-bottom: 2px solid ${Colors.LIGHT_BLUE};
        box-shadow: 0px 1px 6px ${Colors.LIGHT_BLUE};
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        width: 450px;
    }
`

export const Title = styled.h1`
    font-size: ${FontSizes.LARGE};
    color: ${Colors.DARK_BLUE};
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        font-size: ${FontSizes.ASTRONOMICAL};
    }
`

export const ModalContainer = styled.div`
    position: absolute;
    overflow-y: scroll;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000000cc;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CalculatorContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`
