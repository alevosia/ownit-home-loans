import styled from 'styled-components'

import { FONT_SIZES, WHITE, LIGHT_BLUE, DARK_BLUE } from '../../constants'

export const FormHeaderWrapper = styled.div`
    height: auto;
    width: 100%;
    position: relative;
    padding: 30px 15px;
    color: ${WHITE};
    background-color: ${LIGHT_BLUE};
    text-align: center;
    border-radius: 15px;
`

export const QuestionIdWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${WHITE};
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
    background-color: ${DARK_BLUE};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${FONT_SIZES.BIG};
    font-weight: bold;
`

export const Inquiry = styled.h2`
    font-size: ${FONT_SIZES.H2};
    color: ${WHITE};
`

export const Description = styled.p`
    font-size: ${FONT_SIZES.REGULAR};
`
