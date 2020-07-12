import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { Colors, FontSizes, Breakpoints } from '../../constants'

export const Container = styled.div`
    z-index: 10;
    position: fixed;
    height: 100vh;
    width: 280px;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    background-color: ${Colors.LIGHT_BLUE};

    &.open {
        transform: translateX(0%);
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        display: none;
    }
`

export const Link = styled(HashLink)`
    font-size: ${FontSizes.LARGE};
    color: ${Colors.WHITE};
    text-align: center;
    letter-spacing: 1px;
`

export const Links = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Link}:not(:last-child) {
        margin-bottom: 15px;
    }
`

export const Close = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    color: ${Colors.WHITE};
    font-size: ${FontSizes.LARGE};
    text-align: center;
`
