import styled from 'styled-components'

import { FontSizes, Colors } from '../../constants'

export const Wrapper = styled.div`
    height: auto;
    width: 100%;
    position: relative;
    padding: 45px 15px 30px 15px;
    color: ${Colors.WHITE};
    background-color: ${Colors.LIGHT_BLUE};
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    border-radius: 5px;
`

export const QuestionIdWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${Colors.WHITE};
    border-radius: 50%;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
`

export const QuestionId = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${Colors.DARK_BLUE};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${FontSizes.BIG};
    font-weight: bold;
`

export const Inquiry = styled.h2`
    font-size: ${FontSizes.LARGE};
    color: ${Colors.WHITE};
    margin: 0 auto;
`

export const Description = styled.p`
    font-size: ${FontSizes.SMALL};
    margin-top: 15px;
`
