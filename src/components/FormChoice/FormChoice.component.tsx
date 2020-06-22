import React from 'react'

import { Wrapper, Id, Value } from './FormChoice.styles'

interface Props {
    choice: Choice
    onClickHandler: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

const FormChoice: React.FC<Props> = ({ choice: { id, value }, onClickHandler }) => (
    <Wrapper onClick={onClickHandler}>
        <Id>{id}</Id>
        <Value>{value}</Value>
    </Wrapper>
)

export default FormChoice
