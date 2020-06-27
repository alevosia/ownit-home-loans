import styled from 'styled-components'
import { Colors, FontSizes, Breakpoints } from '../../constants'

export const Heading = styled.h2`
    font-size: ${FontSizes.EXTRA_LARGE};
    color: ${Colors.DARK_BLUE};
    padding: 0 15px;
    text-shadow: -1px -1px 2px ${Colors.WHITE};

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        font-size: ${FontSizes.ASTRONOMICAL};
        padding: 0;
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        font-size: 4em;
    }
`

export const LinkButton = styled.a`
    font-size: ${FontSizes.BIG};
    color: ${Colors.WHITE};
    padding: 10px 30px;
    border-radius: 5px;
    background-color: ${Colors.DARK_BLUE};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: bold;

    &:hover {
        color: ${Colors.WHITE};
        text-decoration: none;
        background-color: ${Colors.DARK_BLUE + '99'};
    }
`
