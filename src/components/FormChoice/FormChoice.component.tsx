import React from 'react'

interface Props {
    choice: Choice
    onClickHandler: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

const FormChoice: React.FC<Props> = ({ choice: { id, value }, onClickHandler }) => (
    <span style={{ marginRight: '10px', cursor: 'pointer' }} onClick={onClickHandler}>
        <strong>{id}</strong>: {value}
    </span>
)

export default FormChoice
