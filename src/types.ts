export type QuestionType = 'CHOICES' | 'INPUT'

export interface Choice {
    id: string
    value: string
}

export interface InputField {
    id: string
    name: string
    type: string
    placeholder?: string
}

interface InputData {
    name: string
    value: string
}

export interface Question {
    id: string
    inquiry: string
    description?: string
    type: QuestionType
    choices?: Choice[]
    inputFields?: InputField[]
    value?: string | InputData[]
}

export type Questionnaire = Question[]

export interface QuestionnaireData {
    [key: string]: {
        inquiry: string
        value: string
    }
}
