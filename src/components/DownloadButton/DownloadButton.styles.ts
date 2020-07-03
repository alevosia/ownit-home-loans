import styled, { css } from 'styled-components'
import { Colors } from '../../constants'

export const ButtonStyles = css`
    display: block;
    padding: 5px 15px;
    text-decoration: none;
    color: ${Colors.WHITE};
    background-color: ${Colors.DARK_BLUE};
    border-radius: 5px;
    text-align: center;

    &:hover {
        color: ${Colors.WHITE};
        background-color: ${Colors.DARK_BLUE + 'CC'};
        text-decoration: none;
    }
`
export const StyledAnchor = styled.a`
    ${ButtonStyles}

    margin-bottom: 10px;
`
