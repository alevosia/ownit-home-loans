export type QuestionType = 'CHOICES' | 'INPUT'

export interface Choice {
    id: string
    value: string
}

export interface InputField {
    id: string
    name: string
    type: 'text' | 'email' | 'number' | 'password'
    placeholder?: string
}

export interface Question {
    id: string
    inquiry: string
    description?: string
    type: QuestionType
    choices?: Choice[]
    inputFields?: InputField[]
    value?: string
}

export interface Responses {
    [key: string]: {
        inquiry: string
        value: string
        type: QuestionType
    }
}

export interface ContactAPIResponse {
    message?: string
    sent: boolean
}
