import styled from 'styled-components'
import { Colors, FontSizes, Breakpoints } from '../../constants'

export const Wrapper = styled.div`
    min-height: 100px;
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgb(179, 0, 8);
    background: linear-gradient(
        0deg,
        rgba(179, 0, 8, 1) 0%,
        rgba(231, 0, 10, 1) 45%,
        rgba(179, 0, 8, 1) 100%
    );
    box-shadow: 0px 0px 10px ${Colors.RED};

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        min-height: 150px;
    }
`

export const Title = styled.h1`
    color: ${Colors.WHITE};
    font-size: ${FontSizes.LARGE};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 4px;

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        font-size: ${FontSizes.GIANT};
        letter-spacing: 5px;
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        font-size: ${FontSizes.ASTRONOMICAL};
        letter-spacing: 6px;
    }
`
