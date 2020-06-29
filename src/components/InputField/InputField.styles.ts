import styled from 'styled-components'

import { Colors, FontSizes } from '../../constants'

export const Wrapper = styled.div`
    position: relative;
    height: auto;
    width: auto;
    background-color: ${Colors.DARK_BLUE};
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
`

export const DollarSign = styled.span`
    position: absolute;
    left: 15px;
    top: 10px;
    color: ${Colors.WHITE};
    font-size: ${FontSizes.BIG};
`

export const Input = styled.input`
    height: auto;
    width: 100%;
    font-weight: normal;
    background-color: ${Colors.DARK_BLUE};
    color: ${Colors.WHITE};
    font-size: ${FontSizes.BIG};
    border: none;
    outline: none;
    text-align: center;
    letter-spacing: 2px;

    /* Hide arrows on nmber inputs */
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    -moz-appearance: textfield;
    /* ENDOF Hide arrows on nmber inputs */

    &::placeholder {
        color: ${Colors.WHITE};
        opacity: 0.75;
    }
`

export const IncrementButton = styled.button`
    height: 50px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 3px;
    font-size: ${FontSizes.ASTRONOMICAL};
    border: none;
    background: none;
    outline: none;
    padding: 0 10px;
    color: ${Colors.WHITE};
    display: inline-flex;
    align-items: center;
`
