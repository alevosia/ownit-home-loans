import React, { useState } from 'react'
import { sendEmail } from '../../utils/sendEmail'
import { Wrapper, Input, Textarea, Submit } from './ContactForm.styles'

interface State {
    name: string
    email: string
    message: string
    sent: boolean
    sending: boolean
    error: any
}

const INITIAL_STATE: State = {
    name: '',
    email: '',
    message: '',
    sent: false,
    sending: false,
    error: null
}

const ContactForm: React.FC = () => {
    const [state, setState] = useState<State>(INITIAL_STATE)

    const { name, email, message, sending, sent, error } = state

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target

        setState({
            ...state,
            [name]: value
        })
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setState({
            ...state,
            sending: true
        })

        try {
            const response = await sendEmail(name, email, message)

            setState({
                name: '',
                email: '',
                message: '',
                sent: true,
                sending: false,
                error: response.sent ? null : new Error(response.message)
            })
        } catch (exc) {
            setState({
                name: '',
                email: '',
                message: '',
                sent: true,
                sending: false,
                error: exc
            })
        }
    }

    return (
        <Wrapper data-aos="fade-in">
            {error ? (
                <div>Something went wrong. Please try again later.</div>
            ) : sending ? (
                <div>Sending...</div>
            ) : sent ? (
                <div>
                    Your message has been sent.
                    <br />
                    We&apos;ll get to you as soon as we can.
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                    />
                    <Textarea
                        name="message"
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                    />
                    <Submit type="submit">Send</Submit>
                </form>
            )}
        </Wrapper>
    )
}

export default ContactForm
