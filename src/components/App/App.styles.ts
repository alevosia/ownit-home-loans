import styled from 'styled-components'
import theme from 'styled-theming'

import { Colors } from '../../constants'

const backgroundColor = theme('mode', {
    light: Colors.WHITE,
    dark: Colors.BLACK
})

const color = theme('mode', {
    light: Colors.BLACK,
    dark: Colors.WHITE
})

export const AppWrapper = styled.div`
    position: relative;
    color: ${color};
    background-color: ${backgroundColor};
    height: 100%;
    width: 100%;
    transition: background-color 1s ease-in-out;
`
