import styled from 'styled-components'

interface Props {
    direction: string
    firstColor: string
    secondColor: string
}

const SplitBackground = styled.div<Props>`
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        ${({ direction }) => direction},
        ${({ firstColor }) => firstColor} 50%,
        ${({ secondColor }) => secondColor} 50%
    );
`

export default SplitBackground
