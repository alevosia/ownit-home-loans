import styled, { css } from 'styled-components'
import { Breakpoints } from '../constants'
interface Props {
    height?: string
    width?: string
    flexed?: boolean
    centered?: boolean
    direction?: 'row' | 'column'
}

const centeredStyles = css`
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`

export default styled.section<Props>`
    position: relative;
    min-height: 700px;
    max-height: 700px;
    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || 'auto'};
    display: ${({ flexed }) => flexed && 'flex'};
    flex-direction: ${({ direction }) => direction};

    ${({ centered }) => centered && centeredStyles};

    @media only screen and (min-width: ${Breakpoints.DESKTOP}px) {
        max-height: 900px;
    }
`
