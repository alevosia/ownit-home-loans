import styled from 'styled-components'

import { Breakpoints, FontSizes, Colors } from '../../constants'

export const Wrapper = styled.div`
    width: 100%;
    max-width: 768px;
    margin: 30% auto 0 auto;

    @media only screen and (min-width: ${Breakpoints.TABLET}px) {
        margin: 10% auto 0 auto;
    }
`

export const BackArrowWrapper = styled.div`
    margin-bottom: 10px;
`

export const BackArrow = styled.span<{ visible: boolean }>`
    cursor: pointer;
    font-size: ${FontSizes.LARGE};
    color: ${Colors.LIGHT_BLUE};
    padding: 0 10px;
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
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
