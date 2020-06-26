import styled, { css } from 'styled-components'

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
`

export default styled.section<Props>`
    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || 'auto'};
    display: ${({ flexed }) => flexed && 'flex'};
    flex-direction: ${({ direction }) => direction};
    border: 2px dashed black;

    ${({ centered }) => centered && centeredStyles};
`
