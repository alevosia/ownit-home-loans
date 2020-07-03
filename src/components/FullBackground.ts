import styled from 'styled-components'

import { Breakpoints } from '../constants'
interface Props {
    color?: string
    imageUrl?: string
    size?: 'contain' | 'cover'
    fixed?: boolean
    blur?: string
}

const FullBackground = styled.div<Props>`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    background-color: ${({ color }) => color};
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-position: center center;

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        background-attachment: ${({ fixed }) => fixed && 'fixed'};
    }

    background-size: ${({ size }) => size};
    filter: ${({ blur }) => `blur(${blur})`};
`

export default FullBackground
