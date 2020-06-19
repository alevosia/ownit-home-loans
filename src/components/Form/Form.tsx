import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import { QUESTIONS } from './data'
import { Question, Choice, QuestionnaireData, InputField } from '../../types'

const Form: React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [error, setError] = useState(null)
    const [index, setIndex] = useState<number>(0)
    const [data, setData] = useState<QuestionnaireData>({})

    const currentQuestion = QUESTIONS[index]

    const handleChoice = (question: Question, choice: Choice) => {
        setIndex((prevIndex) => prevIndex + 1)
        setData((prevData) => {
            prevData[question.id] = {
                inquiry: question.inquiry,
                value: choice.value
            }
            return prevData
        })
    }

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        question: Question,
        input: InputField
    ) => {
        const { placeholder } = input
        const { value } = event.target

        setData((prevData) => {
            prevData[question.id + input.id] = {
                inquiry: placeholder || input.name,
                value
            }

            console.log(prevData)

            return prevData
        })
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        console.log(event)
        setIndex((prevIndex) => prevIndex + 1)
    }

    const sendEmail = useCallback(() => {
        let msg = ''

        for (const key in data) {
            msg = msg.concat(`<strong>${data[key].inquiry}</strong><br>${data[key].value}<br><br>`)
        }

        axios
            .post('https://ownithomeloans.com.au/api/contact/', {
                firstName: data['9A'].value,
                email: data['9B'].value,
                msg
            })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.error(error)
                setError(err)
            })
            .finally(() => {
                setSubmitted(true)
            })
    }, [data, error])

    useEffect(() => {
        console.log(index)
        console.log(data)
        if (index >= QUESTIONS.length) {
            console.log('\n--- Sending Email ---')
            sendEmail()
        }
    }, [index, data, sendEmail])

    return (
        <div id="Wrapper">
            {!submitted ? (
                <div id="Form">
                    <button onClick={() => setIndex((index) => index - 1)} disabled={index <= 0}>
                        BACK
                    </button>
                    <button
                        onClick={() => setIndex((index) => index + 1)}
                        disabled={index >= QUESTIONS.length}
                    >
                        NEXT
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
                                    {currentQuestion.inputFields?.map((input) => (
                                        <div key={input.id}>
                                            <input
                                                type={input.type}
                                                name={input.name}
                                                onBlur={(event) =>
                                                    handleChange(event, currentQuestion, input)
                                                }
                                                placeholder={input.placeholder}
                                                style={{ marginRight: '10px' }}
                                            />
                                        </div>
                                    ))}
                                    <button onClick={handleSubmit}>Submit</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ) : error != null ? (
                <div>Something went wrong. Please try again later.</div>
            ) : (
                <div>
                    Success! You&apos;re email has been. We&apos;ll get back to you as we can.
                </div>
            )}
        </div>
    )
}

export default Form
