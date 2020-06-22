import styled from 'styled-components'

import { Colors, FontSizes, Breakpoints } from '../../constants'

export const Wrapper = styled.div`
    height: 50px;
    width: 100%;
    padding: 0px 15px;
    box-shadow: 0px -5px 8px black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoWrapper = styled.div`
    width: 120px;
    height: auto;

    img {
        height: 100%;
        width: 100%;
        vertical-align: middle;
    }
`

export const LinksWrapper = styled.div`
    width: auto;
    height: auto;
`

export const Link = styled.a`
    color: ${Colors.LIGHT_BLUE};
    font-size: ${FontSizes.REGULAR};
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;

    &:not(:last-child) {
        margin-right: 15px;
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        &:not(:last-child) {
            margin-right: 30px;
        }
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        &:not(:last-child) {
            margin-right: 45px;
        }
    }
`
