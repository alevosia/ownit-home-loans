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

    // The handler for 'CHOICES' type of question
    // Adds or modifies the 'responses' hash table of formState using the
    // question id as key, question inquiry and selected/clicked choice's value as properties
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

    // The handler for 'INPUT' type of question
    // Adds or modifies the 'responses' hash table of formState
    // using the input field's id as key, and its placeholder as the inquiry and the
    // event.target's (the input element) value as the value
    const inputBlurHandler = (
        event: React.FocusEvent<HTMLInputElement>,
        inputField: InputField
    ) => {
        let { value } = event.target
        const key = inputField.id
        const inquiry = inputField.placeholder || inputField.name

        // Remove any non digits if its money and localize it
        if (inputField.money && inputField.type === 'text') {
            value = Number(value.replace(/\D/gm, '')).toLocaleString()
            // update input element's value
            event.target.value = value
            // append dollars sign before setting formState
            value = '$' + value
        }

        setFormState((prevState) => {
            const { responses } = prevState
            responses[key] = { inquiry, value }
            return { ...prevState, responses }
        })

        return
    }

    // Deccrements the index by one
    const previousQuestion = () => {
        setFormState((prevState) => ({
            ...prevState,
            index: prevState.index > 0 ? prevState.index - 1 : 0
        }))
    }

    // Increments the index by one
    const nextQuestion = (_: React.FormEvent<HTMLFormElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            index: prevState.index < QUESTIONS.length ? prevState.index + 1 : 0
        }))
    }

    const resetFormState = () => {
        setFormState(INITIAL_FORM_STATE)
    }

    // Restructures and prepares the data from 'responses' for email sending
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

        try {
            const response = await sendEmail(name, email, message)

            setFormState({
                index: 0,
                submitted: true,
                submitting: false,
                sent: response.sent,
                error: response.sent ? null : new Error(response.message),
                responses: {}
            })
        } catch (exc) {
            console.error(exc)

            setFormState({
                index: 0,
                submitted: true,
                submitting: false,
                sent: false,
                error: exc,
                responses: {}
            })
        }
    }, [responses])

    // This effect checks if submitting is true which calls the submitForm function above
    useEffect(() => {
        if (submitting) {
            submitForm()
        }
    }, [submitting, submitForm])

    // This effect checks if index is greater than or equal to the questions' length
    // if yes, set 'submitting' property of formState to true which triggers the effect above
    useEffect(() => {
        if (index >= QUESTIONS.length && !submitting && !submitted) {
            setFormState((prevState) => ({
                ...prevState,
                submitting: true
            }))
        }
    }, [index, submitted, submitting])

    // Renders the form if formState is NOT yet submitted and there is still a question,
    // else renders error, submitting, sent or failed
    return (
        <Wrapper id="Form">
            <BackArrowWrapper onClick={previousQuestion}>
                <BackArrow
                    style={{
                        display: index > 0 && index < QUESTIONS.length ? 'inline-block' : 'none'
                    }}
                />
            </BackArrowWrapper>
            {!submitted && QUESTIONS[index] ? (
                <FormQuestion
                    question={QUESTIONS[index]}
                    responses={responses}
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
                        {error ? (
                            Messages.MESSAGE_ERROR
                        ) : submitting ? (
                            Messages.MESSAGE_SENDING
                        ) : sent ? (
                            <div>
                                <p>{Messages.MESSAGE_SUCCESS}</p>
                                <br />
                                <p>{Messages.MESSAGE_SUCCESS2}</p>
                            </div>
                        ) : (
                            Messages.MESSAGE_FAILED
                        )}
                    </ResultMessage>
                </ResultWrapper>
            )}
        </Wrapper>
    )
}

export default Form
