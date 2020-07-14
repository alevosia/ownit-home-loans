import React from 'react'

import { Wrapper, FormBody, FormInputsWrapper, FlexColumn, Submit } from './FormQuestion.styles'
import FormHeader from '../FormHeader/FormHeader.component'
import FormChoice from '../FormChoice/FormChoice.component'
import InputField from '../InputField/InputField.component'

interface Props {
    question: Question
    responses: Responses
    onChoiceSelectHandler: (question: Question, choice: Choice) => void
    onInputBlurHandler: (event: React.FocusEvent<HTMLInputElement>, inputField: InputField) => void
    nextQuestionHandler: (event: React.FormEvent<HTMLFormElement>) => void
}

interface CFormHeaderProps {
    question: Question
    responses: Responses
}

const FormQuestion: React.FC<Props> = ({
    question,
    responses,
    onChoiceSelectHandler,
    onInputBlurHandler,
    nextQuestionHandler
}) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        nextQuestionHandler(event)
    }

    const CFormHeader: React.FC<CFormHeaderProps> = ({ question, responses }) => {
        let inquiry = question.inquiry

        if (question.id === '9') {
            const interval = responses['8'].value

            if (interval === 'Annually') {
                inquiry = 'How much is your annual salary?'
            } else {
                inquiry = `How much is your ${interval.toLowerCase()} salary?`
            }
        }

        return <FormHeader id={question.id} inquiry={inquiry} description={question.description} />
    }

    // Renders multiple choices or input fields depending on the question type
    return (
        <Wrapper data-aos="fade-in">
            <CFormHeader question={question} responses={responses} />
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
