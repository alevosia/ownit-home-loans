import React from 'react'

import { Wrapper, FormBody, FormInputsWrapper, FlexColumn, Submit } from './FormQuestion.styles'
import FormHeader from '../FormHeader/FormHeader.component'
import FormChoice from '../FormChoice/FormChoice.component'
import InputField from '../InputField/InputField.component'

interface Props {
    question: Question
    onChoiceSelectHandler: (question: Question, choice: Choice) => void
    onInputBlurHandler: (event: React.FocusEvent<HTMLInputElement>, inputField: InputField) => void
    nextQuestionHandler: (event: React.FormEvent<HTMLFormElement>) => void
}

const FormQuestion: React.FC<Props> = ({
    question,
    onChoiceSelectHandler,
    onInputBlurHandler,
    nextQuestionHandler
}) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        nextQuestionHandler(event)
    }
    return (
        <Wrapper>
            <FormHeader
                id={question.id}
                inquiry={question.inquiry}
                description={question.description}
            />

            <FormBody onSubmit={handleSubmit}>
                {question.type === 'CHOICES' ? (
                    <FlexColumn>
                        {question.choices?.map((choice) => (
                            <FormChoice
                                key={choice.id}
                                choice={choice}
                                onClickHandler={(_) => onChoiceSelectHandler(question, choice)}
                            />
                        ))}
                    </FlexColumn>
                ) : (
                    <FormInputsWrapper>
                        <FlexColumn>
                            {question.inputFields?.map((inputField) => (
                                <InputField
                                    key={inputField.id}
                                    inputField={inputField}
                                    onBlurHandler={(event) => onInputBlurHandler(event, inputField)}
                                />
                            ))}
                        </FlexColumn>
                        <Submit type="submit">Submit</Submit>
                    </FormInputsWrapper>
                )}
            </FormBody>
        </Wrapper>
    )
}

export default FormQuestion
