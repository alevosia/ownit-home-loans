import styled, { css } from 'styled-components'
import { NavHashLink } from 'react-router-hash-link'
import { Colors, FontSizes, Breakpoints } from '../../constants'

interface WrapperProps {
    readonly fixed?: boolean
    readonly transparent: boolean
}

export const NAVIGATION_HEIGHT = '70px'

const FixedStyles = css`
    position: fixed;
    top: 0;
    left: 0;
`

export const LinksWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    display: none;

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        display: block;
    }
`

export const NavLink = styled(NavHashLink)`
    display: inline-block;
    position: relative;
    color: ${Colors.LIGHT_BLUE};
    font-size: ${FontSizes.SMALL};
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 20px;

    &:hover {
        text-decoration: none;
    }

    @media only screen and (min-width: ${Breakpoints.PHONE}px) {
        margin-left: 30px;
        font-size: ${FontSizes.REGULAR};
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        margin-left: unset;
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        background: #ffffff00;
        border-radius: 30px;
        padding: 10px 15px;
        margin: 0px 5px;
        transition: all 0.5s ease;

        &:focus,
        &:hover {
            background: #ffffff99;
        }
    }

    @media only screen and (min-width: ${Breakpoints.WIDE_DESKTOP}px) {
        font-size: ${FontSizes.BIG};

        &:not(:last-child) {
            margin-right: 30px;
        }
    }
`

export const Wrapper = styled.nav<WrapperProps>`
    z-index: 10;
    height: ${NAVIGATION_HEIGHT};
    width: 100%;
    padding: 0 10px;
    background: ${({ transparent }) => (transparent ? 'transparent' : Colors.WHITE)};
    box-shadow: ${({ transparent }) => (transparent ? 'none' : `0px -5px 10px ${Colors.BLACK}`)};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;

    ${({ fixed }) => fixed && FixedStyles}

    ${NavLink} {
        color: ${({ transparent }) => (transparent ? Colors.DARK_BLUE : Colors.LIGHT_BLUE)};
    }

    @media only screen and (min-width: ${Breakpoints.PHONE}px) {
        padding: 10px 10px 0 10px;
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        padding: 10px 20px 0 20px;
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        padding: 10px 30px 0 30px;
    }

    &.opaque {
        background: ${Colors.WHITE + 'AA'};
        box-shadow: 0px -5px 10px ${Colors.BLACK};
    }
`

export const LogoWrapper = styled.div`
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

export const MobileMenuButton = styled.button`
    background: none;
    color: ${Colors.DARK_BLUE};
    border: none;
    border-radius: 0;
    font-size: ${FontSizes.BIG};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px;

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        display: none;
    }
`
