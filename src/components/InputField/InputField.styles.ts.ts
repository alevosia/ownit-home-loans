import styled from 'styled-components'

import { DARK_BLUE, FONT_SIZES } from '../../constants'

export const Wrapper = styled.div`
    height: auto;
    width: auto;
    background-color: ${DARK_BLUE};
    padding: 15px 25px;
    border-radius: 5px;
`

export const Input = styled.input`
    font-weight: bold;
    color: ${DARK_BLUE};
    font-size: ${FONT_SIZES.BIG};
    padding: 5px 10px;
    border: none;
    outline: none;
`
