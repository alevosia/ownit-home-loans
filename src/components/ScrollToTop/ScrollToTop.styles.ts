import styled from 'styled-components'
import { Colors, Breakpoints } from '../../constants'

export const Wrapper = styled.div`
    z-index: 5;
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    transform: matrix(0, 1, -1, 0, 0, 202);
    transition: all 1.5s ease;

    &.show {
        display: block;
        transform: matrix(1, 0, 0, 1, 0, 0);
    }

    svg {
        height: 100%;
        width: 100%;
        background: ${Colors.DARK_BLUE};
        border-radius: 50%;
        color: ${Colors.WHITE};
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        width: 50px;
        height: 50px;
    }
`
