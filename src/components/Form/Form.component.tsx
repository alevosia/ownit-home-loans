import React, { useState, useEffect, useCallback } from 'react'
import { QUESTIONS } from './data'
import { sendEmail } from '../../utils/sendEmail'
import { Messages } from '../../constants'
import FormQuestion from '../FormQuestion/FormQuestion.component'

import {
    Wrapper,
    BackArrowWrapper,
    BackArrow,
    ResultWrapper,
    ResultHeader,
    ResultHeaderText,
    ResultMessage
} from './Form.styles'

const INITIAL_FORM_STATE: FormState = {
    index: 0,
    responses: {},
    submitted: false,
    submitting: false,
    sent: false,
    error: null
}

const Form: React.FC = () => {
    const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE)

    const { index, responses, submitted, submitting, sent, error } = formState

    const choiceSelectHandler = (question: Question, choice: Choice) => {
        setFormState((prevState) => {
            const { responses } = prevState

            responses[question.id] = {
                inquiry: question.inquiry,
                value: choice.value
            }

            return {
                ...prevState,
                index: prevState.index + 1,
                responses
            }
        })
    }

    const inputBlurHandler = (
        event: React.FocusEvent<HTMLInputElement>,
        inputField: InputField
    ) => {
        const { value } = event.target
        const key = inputField.id
        const inquiry = inputField.placeholder || inputField.name

        setFormState((prevState) => {
            const { responses } = prevState
            responses[key] = { inquiry, value }
            return { ...prevState, responses }
        })
    }

    const previousQuestion = () => {
        setFormState((prevState) => ({
            ...prevState,
            index: prevState.index > 0 ? prevState.index - 1 : 0
        }))
    }

    const nextQuestion = (_: React.FormEvent<HTMLFormElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            index: prevState.index < QUESTIONS.length ? prevState.index + 1 : 0
        }))
    }

    const resetFormState = () => {
        setFormState(INITIAL_FORM_STATE)
    }

    const submitForm = useCallback(async () => {
        // TODO: Improve validation
        if (responses['name'] == null || responses['email'] == null) {
            alert("Something's wrong. Resetting form...")
            return resetFormState()
        }

        const name = responses['name'].value
        const email = responses['email'].value

        let message = ''

        for (const key in responses) {
            message += `<strong>${responses[key].inquiry}</strong><br>${responses[key].value}<br><br>`
        }

        const response = await sendEmail(name, email, message)

        setFormState({
            index: 0,
            submitted: true,
            submitting: false,
            sent: response.sent,
            error: response.sent ? null : new Error(response.message),
            responses: {}
        })
    }, [responses])

    useEffect(() => {
        if (submitting) {
            submitForm()
        }
    }, [submitting, submitForm])

    useEffect(() => {
        // if we reach the end, submit form
        if (index >= QUESTIONS.length) {
            setFormState((prevState) => ({
                ...prevState,
                submitting: true
            }))
        }
    }, [index, responses])

    return (
        <Wrapper id="Form">
            <BackArrowWrapper onClick={previousQuestion}>
                <BackArrow visible={index > 0 && index < QUESTIONS.length}>⮘</BackArrow>
            </BackArrowWrapper>
            {!submitted && QUESTIONS[index] ? (
                <FormQuestion
                    question={QUESTIONS[index]}
                    nextQuestionHandler={nextQuestion}
                    onChoiceSelectHandler={choiceSelectHandler}
                    onInputBlurHandler={inputBlurHandler}
                />
            ) : (
                <ResultWrapper>
                    <ResultHeader>
                        <ResultHeaderText>Result</ResultHeaderText>
                    </ResultHeader>
                    <ResultMessage>
                        {error
                            ? Messages.MESSAGE_ERROR
                            : submitting
                            ? Messages.MESSAGE_SENDING
                            : sent
                            ? Messages.MESSAGE_SUCCESS
                            : Messages.MESSAGE_FAILED}
                    </ResultMessage>
                </ResultWrapper>
            )}
        </Wrapper>
    )
}

export default Form
