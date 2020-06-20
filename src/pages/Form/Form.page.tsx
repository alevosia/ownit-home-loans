import React from 'react'

import { FormPageWrapper, FormWrapper } from './Form.styles'

import Form from '../../components/Form/Form.component'

const FormPage: React.FC = () => {
    return (
        <FormPageWrapper id="FormPage">
            <FormWrapper>
                <Form />
            </FormWrapper>
        </FormPageWrapper>
    )
}

export default FormPage
