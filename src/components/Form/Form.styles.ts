import styled from 'styled-components'

import { Breakpoints, FontSizes, Colors } from '../../constants'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left-solid.svg'

export const Wrapper = styled.div`
    width: 100%;
    max-width: ${Breakpoints.TABLET}px;
    height: auto;
    margin: 0 auto;
    padding: 10px 5px 45px 5px;

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        padding: 30px 15px 45px 15px;
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
