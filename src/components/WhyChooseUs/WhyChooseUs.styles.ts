import styled from 'styled-components'
import { Colors, FontSizes, Breakpoints } from '../../constants'

export const RoundImageWrapper = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: ${Colors.WHITE};
    padding: 10px;
    /* margin: auto auto; */

    img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (min-width: ${Breakpoints.PHONE}px) {
        & {
            width: 280px;
            height: 280px;
            padding: 15px;
        }
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        & {
            width: 320px;
            height: 320px;
            padding: 15px;
        }
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        & {
            width: 450px;
            height: 450px;
            padding: 30px;
        }
    }
`

export const Heading = styled.h2`
    color: ${Colors.DARK_BLUE};
    font-size: ${FontSizes.JUMBO};
    text-transform: capitalize;
    margin-bottom: 0;

    @media only screen and (min-width: ${Breakpoints.PHONE}px) {
        font-size: ${FontSizes.ASTRONOMICAL};
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        font-size: 4em;
        word-spacing: 5px;
        color: ${Colors.WHITE};
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        font-size: 5em;
    }
`

export const Mission = styled.p`
    position: relative;
    color: ${Colors.DARK_BLUE};
    font-size: ${FontSizes.BIG};
    margin-bottom: 0;

    &::before {
        content: '';
        position: absolute;
        left: -10px;
        top: 0;
        width: 3px;
        height: 100%;
        background-color: ${Colors.DARK_BLUE};

        @media only screen and (min-width: ${Breakpoints.TABLET}px) {
            left: -15px;
            width: 5px;
        }
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        font-size: ${FontSizes.LARGE};
    }
`
