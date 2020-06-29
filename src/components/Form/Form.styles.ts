import styled from 'styled-components'

import { Breakpoints, FontSizes, Colors } from '../../constants'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left-solid.svg'

export const Wrapper = styled.div`
    width: 100%;
    max-width: ${Breakpoints.TABLET}px;
    margin: 0;

    @media only screen and (min-width: ${Breakpoints.PHONE}px) {
        margin: 15% auto 0 auto;
    }

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        margin: 10% auto 0 auto;
    }

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        margin: 5% auto 0 auto;
    }
`

export const BackArrowWrapper = styled.div`
    height: 55px;
    width: auto;
`

export const BackArrow = styled(ArrowLeft)`
    cursor: pointer;
    font-size: ${FontSizes.REGULAR};
    color: ${Colors.LIGHT_BLUE};
    padding: 0 10px;
    width: 50px;
    padding: 10px;
`

export const ResultWrapper = styled.div`
    height: auto;
    width: 100%;
`

export const ResultHeader = styled.div`
    height: auto;
    width: 100%;
    position: relative;
    padding: 30px 15px;
    color: ${Colors.WHITE};
    background-color: ${Colors.DARK_BLUE};
    margin-bottom: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    border-radius: 5px;
`

export const ResultHeaderText = styled.h2`
    font-size: ${FontSizes.LARGE};
    color: ${Colors.WHITE};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 auto;
`

export const ResultMessage = styled.div`
    color: ${Colors.DARK_BLUE};
    font-size: ${FontSizes.BIG};
    padding: 15px;
    text-align: center;
`
