import React from 'react'

import {
    FormQuestionWrapper,
    FormBody,
    FormInputsWrapper,
    FlexColumn,
    Submit
} from './FormQuestion.styles'
import FormHeader from '../FormHeader/FormHeader.component'
import FormChoice from '../FormChoice/FormChoice.component'
import InputField from '../InputField/InputField.component'

interface Props {
    question: Question
    onChoiceSelectHandler: (question: Question, choice: Choice) => void
    onInputBlurHandler: (
        event: React.FocusEvent<HTMLInputElement>,
        question: Question,
        inputField: InputField
    ) => void
    nextQuestionHandler: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

const FormQuestion: React.FC<Props> = ({
    question,
    onChoiceSelectHandler,
    onInputBlurHandler,
    nextQuestionHandler
}) => {
    return (
        <FormQuestionWrapper>
            <FormHeader
                id={question.id}
                inquiry={question.inquiry}
                description={question.description}
            />

            <FormBody>
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
                                    onBlurHandler={(event) =>
                                        onInputBlurHandler(event, question, inputField)
                                    }
                                />
                            ))}
                        </FlexColumn>
                        <Submit onClick={nextQuestionHandler}>Submit</Submit>
                    </FormInputsWrapper>
                )}
            </FormBody>
        </FormQuestionWrapper>
    )
}

export default FormQuestion
