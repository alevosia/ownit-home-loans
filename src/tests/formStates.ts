export const successState: FormState = {
    index: 0,
    responses: {},
    submitted: true,
    submitting: false,
    sent: true,
    error: null
}

export const errorState: FormState = {
    index: 0,
    responses: {},
    submitted: true,
    submitting: false,
    sent: false,
    error: new Error('Something went wrong')
}

export const failedState: FormState = {
    index: 0,
    responses: {},
    submitted: true,
    submitting: false,
    sent: false,
    error: null
}

export const sendingState: FormState = {
    index: 0,
    responses: {},
    submitted: false,
    submitting: true,
    sent: false,
    error: null
}
