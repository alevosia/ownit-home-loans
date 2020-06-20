import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import { QUESTIONS } from './data'
import { Question, Choice, Responses, InputField, ContactAPIResponse } from '../../types'

const CONTACT_API_URL = 'https://ownithomeloans.com.au/api/contact/'

const Form: React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const [index, setIndex] = useState<number>(0)
    const [responses, setResponses] = useState<Responses>({})

    const handleChoice = (question: Question, choice: Choice) => {
        setIndex((prevIndex) => prevIndex + 1)
        setResponses((prevData) => {
            prevData[question.id] = {
                type: question.type,
                inquiry: question.inquiry,
                value: choice.value
            }

            return prevData
        })
    }

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        question: Question,
        inputField: InputField
    ) => {
        const { value } = event.target
        const key = question.id + inputField.id
        const type = question.type
        const inquiry = inputField.placeholder || inputField.name

        setResponses((prevData) => {
            prevData[key] = {
                type,
                inquiry,
                value
            }

            return prevData
        })
    }

    const previousQuestion = () => {
        setIndex((prevIndex) => prevIndex - 1)
    }

    const nextQuestion = () => {
        setIndex((prevIndex) => prevIndex + 1)
    }

    const sendEmail = useCallback(() => {
        let message = ''

        for (const key in responses) {
            message += `<strong>${responses[key].inquiry}</strong><br>${responses[key].value}<br><br>`
        }

        console.log(message)

        axios
            .post(CONTACT_API_URL, {
                name: responses['9A'].value,
                email: responses['9B'].value,
                message
            })
            .then((response) => {
                console.log(response)

                const data = response.data as ContactAPIResponse

                if (!data.sent) {
                    setError(new Error(data.message))
                }
            })
            .catch((err) => {
                console.error(err)
                setError(err)
            })
            .finally(() => {
                setSubmitted(true)
            })
    }, [responses])

    useEffect(() => {
        console.log(responses)
        if (index >= QUESTIONS.length) {
            console.log('\n--- Sending Email ---')
            sendEmail()
        }
    }, [index, responses, sendEmail])

    const currentQuestion = QUESTIONS[index]

    return (
        <div id="Wrapper">
            {!submitted ? (
                <div id="Form">
                    <button onClick={previousQuestion} disabled={index <= 0}>
                        BACK
                    </button>
                    {currentQuestion && (
                        <div>
                            <h2>{currentQuestion.inquiry}</h2>
                            <p>{currentQuestion.description}</p>

                            {currentQuestion.type === 'CHOICES' ? (
                                currentQuestion.choices?.map((choice) => (
                                    <span
                                        key={choice.id}
                                        style={{ marginRight: '10px', cursor: 'pointer' }}
                                        onClick={() => handleChoice(currentQuestion, choice)}
                                    >
                                        {choice.id}: {choice.value}
                                    </span>
                                ))
                            ) : (
                                <div>
                                    {currentQuestion.inputFields?.map((inputField) => {
                                        const { id, type, name, placeholder } = inputField
                                        return (
                                            <div key={id}>
                                                <input
                                                    type={type}
                                                    name={name}
                                                    onBlur={(event) =>
                                                        handleChange(
                                                            event,
                                                            currentQuestion,
                                                            inputField
                                                        )
                                                    }
                                                    placeholder={placeholder}
                                                    style={{ marginRight: '10px' }}
                                                />
                                            </div>
                                        )
                                    })}
                                    <button onClick={nextQuestion}>Submit</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ) : error != null ? (
                <div>{error.message}</div>
            ) : (
                <div>
                    Success! You&apos;re email has been. We&apos;ll get back to you as we can.
                </div>
            )}
        </div>
    )
}

export default Form
