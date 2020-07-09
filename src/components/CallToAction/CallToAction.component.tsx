import styled, { css } from 'styled-components'
import { FontSizes, Breakpoints, Colors } from '../../constants'
import { Link } from 'react-router-dom'

export const ButtonStyles = css`
    font-size: ${FontSizes.REGULAR};
    padding: 10px;
    text-decoration: none;
    color: ${Colors.WHITE};
    background-color: ${Colors.DARK_BLUE};
    border: none;
    border-radius: 5px;
    text-align: center;
    max-width: 100%;

    &:hover {
        color: ${Colors.WHITE};
        background-color: ${Colors.DARK_BLUE + 'CC'};
        text-decoration: none;
    }
`

const CallToAction = styled(Link)`
    ${ButtonStyles}
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        padding: 10px 30px;
        font-size: ${FontSizes.BIG};
        letter-spacing: 2px;
        margin: 0 15px;
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        font-size: ${FontSizes.LARGE};
    }
`

export default CallToAction
