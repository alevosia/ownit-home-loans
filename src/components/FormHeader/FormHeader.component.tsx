import React from 'react'

import {
    FormHeaderWrapper,
    QuestionIdWrapper,
    QuestionId,
    Inquiry,
    Description
} from './FormHeader.styles'
interface Props {
    id: string
    inquiry: string
    description?: string
}

const FormHeader: React.FC<Props> = ({ id, inquiry, description }) => {
    return (
        <FormHeaderWrapper>
            <QuestionIdWrapper>
                <QuestionId>{id}</QuestionId>
            </QuestionIdWrapper>
            <Inquiry>{inquiry}</Inquiry>
            {description && <Description>{description}</Description>}
        </FormHeaderWrapper>
    )
}

export default FormHeader
