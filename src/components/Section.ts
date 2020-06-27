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
    overflow-x: hidden;
`

export default styled.section<Props>`
    position: relative;
    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || 'auto'};
    display: ${({ flexed }) => flexed && 'flex'};
    flex-direction: ${({ direction }) => direction};

    ${({ centered }) => centered && centeredStyles};
`
