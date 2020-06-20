interface FormState {
    index: number
    submitted: boolean
    submitting: boolean
    sent: boolean
    error: any
    responses: Responses
}

type QuestionType = 'CHOICES' | 'INPUT'

interface Question {
    id: string
    inquiry: string
    description?: string
    type: QuestionType
    choices?: Choice[]
    inputFields?: InputField[]
    value?: string
}

interface Choice {
    id: string
    value: string
}

interface InputField {
    id: string
    name: string
    type: 'text' | 'email' | 'number' | 'password'
    placeholder?: string
}

interface Responses {
    [key: string]: {
        inquiry: string
        value: string
    }
}
