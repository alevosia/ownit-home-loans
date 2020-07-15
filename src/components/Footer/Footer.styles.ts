import styled from 'styled-components'

import { Colors, FontSizes, Breakpoints } from '../../constants'

export const Wrapper = styled.footer`
    padding: 15px 0;
    height: auto;
    width: 100%;
    text-align: center;
    background-color: ${Colors.GRAY};
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    .icon {
        margin: 0 auto 5px auto;
        display: block;
        height: 30px;
        width: 30px;
        color: ${Colors.DARK_BLUE};
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        padding: 20px;
    }
`

export const Info = styled.span`
    font-size: ${FontSizes.REGULAR};
    color: ${Colors.DARK_BLUE};

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        font-size: ${FontSizes.BIG};
    }
`

export const FooterImageWrapper = styled.div`
    width: 200px;
    height: auto;
    margin: 15px auto 0 auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
