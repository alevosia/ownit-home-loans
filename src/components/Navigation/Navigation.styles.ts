import styled, { css } from 'styled-components'

import { Colors, FontSizes, Breakpoints } from '../../constants'

interface WrapperProps {
    readonly fixed?: boolean
    readonly transparent: boolean
}

export const NAVIGATION_HEIGHT = '60px'

const FixedStyles = css`
    position: fixed;
    top: 0;
    left: 0;
`

export const Link = styled.a`
    color: ${Colors.LIGHT_BLUE};
    font-size: ${FontSizes.SMALL};
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;

    &:not(:last-child) {
        margin-right: 15px;
    }

    @media only screen and (min-width: ${Breakpoints.PHONE}px) {
        font-size: ${FontSizes.REGULAR};

        &:not(:last-child) {
            margin-right: 20px;
        }
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        font-size: ${FontSizes.BIG};

        &:not(:last-child) {
            margin-right: 30px;
        }
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        &:not(:last-child) {
            margin-right: 60px;
        }
    }
`

export const Wrapper = styled.div<WrapperProps>`
    z-index: 10;
    height: ${NAVIGATION_HEIGHT};
    width: 100%;
    padding: 0 10px;
    background: ${({ transparent }) => (transparent ? 'transparent' : Colors.WHITE)};
    box-shadow: ${({ transparent }) => (transparent ? 'none' : '0px -5px 10px black')};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ fixed }) => fixed && FixedStyles}

    ${Link} {
        color: ${({ transparent }) => (transparent ? Colors.DARK_BLUE : Colors.LIGHT_BLUE)};
    }

    @media only screen and (min-width: ${Breakpoints.PHONE}px) {
        padding: 10px 10px 0 10px;
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        padding: 15px 20px 0 20px;
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        padding: 15px 30px 0 30px;
        height: 80px;
    }
`

export const LogoWrapper = styled.div`
    max-width: 80px;
    height: 100%;
    margin-right: 10px;

    img {
        height: 100%;
        max-width: 100%;
        object-fit: contain;
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        max-width: 120px;
    }
`

export const LinksWrapper = styled.div`
    width: auto;
    height: auto;
`
