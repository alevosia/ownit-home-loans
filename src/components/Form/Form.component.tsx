import React, { useState, useEffect, useCallback } from 'react'
import { QUESTIONS } from './data'
import { sendEmail } from '../../utils/sendEmail'
import { MESSAGE_SUCCESS, MESSAGE_ERROR, MESSAGE_FAILED } from '../../constants/form'
import FormQuestion from '../FormQuestion/FormQuestion.component'

const Form: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        index: 0,
        responses: {},
        submitted: false,
        submitting: false,
        sent: false,
        error: null
    })

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
        question: Question,
        inputField: InputField
    ) => {
        const { value } = event.target
        const key = question.id + inputField.id
        const inquiry = inputField.placeholder || inputField.name

        setFormState((prevState) => {
            const { responses } = prevState
            responses[key] = { inquiry, value }
            return { ...prevState, responses }
        })
    }

    const nextQuestion = () => {
        setFormState((prevState) => ({
            ...prevState,
            index: prevState.index + 1
        }))
    }

    const submitForm = useCallback(async () => {
        console.log(responses)
        const name = responses['9A'].value
        const email = responses['9B'].value

        let message = ''

        for (const key in responses) {
            message += `<strong>${responses[key].inquiry}</strong><br>${responses[key].value}<br><br>`
        }

        console.log('Name: ' + name)
        console.log('Email: ' + email)
        console.log(message)

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
        if (index >= QUESTIONS.length) {
            setFormState((prevState) => ({
                ...prevState,
                submitting: true
            }))
        }
    }, [index])

    return (
        <div id="Form">
            {submitting ? (
                <div>Sending...</div>
            ) : !submitted && QUESTIONS[index] ? (
                <FormQuestion
                    question={QUESTIONS[index]}
                    nextQuestionHandler={nextQuestion}
                    onChoiceSelectHandler={choiceSelectHandler}
                    onInputBlurHandler={inputBlurHandler}
                />
            ) : error ? (
                <div>{MESSAGE_ERROR}</div>
            ) : sent ? (
                <div>{MESSAGE_SUCCESS}</div>
            ) : (
                <div>{MESSAGE_FAILED}</div>
            )}
        </div>
    )
}

export default Form
