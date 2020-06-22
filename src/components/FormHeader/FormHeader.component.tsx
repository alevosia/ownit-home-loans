import React from 'react'

import { Wrapper, QuestionIdWrapper, QuestionId, Inquiry, Description } from './FormHeader.styles'
interface Props {
    id?: string
    inquiry: string
    description?: string
}

const FormHeader: React.FC<Props> = ({ id, inquiry, description }) => {
    return (
        <Wrapper id="FormHeader">
            {id !== undefined && (
                <QuestionIdWrapper>
                    <QuestionId>{id}</QuestionId>
                </QuestionIdWrapper>
            )}
            <Inquiry>{inquiry}</Inquiry>
            {description !== undefined && <Description>{description}</Description>}
        </Wrapper>
    )
}

export default FormHeader
