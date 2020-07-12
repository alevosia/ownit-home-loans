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

export const LinksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const LinkButton = styled.a`
    display: inline-block;
    font-size: ${FontSizes.REGULAR};
    color: ${Colors.WHITE};
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: ${Colors.DARK_BLUE};
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    letter-spacing: 2px;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    &:hover {
        color: ${Colors.WHITE};
        text-decoration: none;
        background-color: ${Colors.DARK_BLUE + 'CC'};
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        width: 300px;
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        width: 48%;
        margin-bottom: 20px;

        &:first-child {
            font-size: 14px;
        }
    }
`
