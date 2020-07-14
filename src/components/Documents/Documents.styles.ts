import styled from 'styled-components'
import { FontSizes, Breakpoints } from '../../constants'

export const Text = styled.p`
    margin: 0;
    font-size: ${FontSizes.SMALL};

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        font-size: ${FontSizes.REGULAR};
    }
`
