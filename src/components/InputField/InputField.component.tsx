import React, { useRef, useEffect } from 'react'

import { Wrapper, Input } from './InputField.styles.ts'

interface Props {
    inputField: InputField
    onBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void
}

const InputField: React.FC<Props> = ({
    inputField: { name, type, placeholder },
    onBlurHandler
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.value = ''
        }
    }, [])
    return (
        <Wrapper>
            <Input
                ref={inputRef}
                name={name}
                type={type}
                placeholder={placeholder}
                onBlur={onBlurHandler}
                min={0}
            />
        </Wrapper>
    )
}

export default InputField
