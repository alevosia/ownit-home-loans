import styled from 'styled-components'
import theme from 'styled-theming'

import { BLACK, WHITE } from '../../constants'

const backgroundColor = theme('mode', {
    light: WHITE,
    dark: BLACK
})

const color = theme('mode', {
    light: BLACK,
    dark: WHITE
})

export const AppWrapper = styled.div`
    position: relative;
    color: ${color};
    background-color: ${backgroundColor};
    height: 100%;
    width: 100%;
    transition: background-color 1s ease-in-out;
`
