import styled from 'styled-components'

import { Colors, FontSizes } from '../../constants'

export const Wrapper = styled.footer`
    padding: 10px;
    height: auto;
    width: 100%;
    text-align: center;
    background-color: ${Colors.GRAY};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Heading = styled.h3`
    font-size: ${FontSizes.LARGE}px;
    color: ${Colors.DARK_BLUE};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
`

export const Icon = styled.img`
    display: block;
    marign: 0 auto;
    height: 30px;
    width: 30px;
    color: ${Colors.DARK_BLUE};
`
