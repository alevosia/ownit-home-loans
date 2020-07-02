import React, { useRef, useEffect } from 'react'

import { Wrapper, DollarSign, Input, IncrementButton } from './InputField.styles'

interface Props {
    inputField: InputField
    onBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void
}

const InputField: React.FC<Props> = ({
    inputField: { id, name, type, money, placeholder, min, max, incrementBy },
    onBlurHandler
}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    // Set the value to the minimum on first render and focus except if it's email or contact
    useEffect(() => {
        if (name === 'email' || name === 'contact') return

        if (inputRef && inputRef.current) {
            if (min != null) {
                inputRef.current.value = min.toString()
            }
            inputRef.current.focus()
        }
    }, [min, name])

    // Triggers everytime the input value has changed
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (inputRef && inputRef.current) {
            const { target } = event

            if (target.type === 'number') {
                // remove leading zeros
                target.value = Number(target.value).toString()

                if (min !== undefined) {
                    // If empty or negative value, set to minimum
                    if (target.value === '' || Number(target.value) < min) {
                        inputRef.current.value = min.toString()
                    }
                }
            } else {
                inputRef.current.value = target.value
            }
        }
    }

    // Adds one to the value of input type is number and incrementBy is defined
    const incrementNumberValue = () => {
        if (inputRef.current && type === 'number' && incrementBy !== undefined) {
            inputRef.current.focus()
            inputRef.current.value = (Number(inputRef.current.value) + incrementBy).toString()
            inputRef.current.blur()
        }
    }

    return (
        <Wrapper>
            {money && <DollarSign>$</DollarSign>}
            <Input
                ref={inputRef}
                onChange={handleChange}
                onBlur={onBlurHandler}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                min={min}
                max={max}
                required={true}
            />
            {type === 'number' && (
                <IncrementButton onClick={incrementNumberValue} type="button">
                    +
                </IncrementButton>
            )}
        </Wrapper>
    )
}

export default InputField
