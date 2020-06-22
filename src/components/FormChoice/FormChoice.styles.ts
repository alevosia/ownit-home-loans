import styled from 'styled-components'

import { Colors, FontSizes } from '../../constants'

export const Wrapper = styled.div`
    height: auto;
    width: auto;
    cursor: pointer;
    margin-bottom: 25px;
`

export const Id = styled.span`
    display: inline-block;
    padding: 8px;
    width: 40px;
    text-align: center;
    vertical-align: middle;
    color: ${Colors.WHITE};
    background: ${Colors.DARK_BLUE};
    font-size: ${FontSizes.BIG};
    font-weight: bold;
    margin-right: 10px;
    border-radius: 5px;
`

export const Value = styled.span`
    color: ${Colors.LIGHT_BLUE};
    font-size: ${FontSizes.BIG};
    font-weight: normal;
`
