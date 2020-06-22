import React, { useRef, useEffect } from 'react'

import { Wrapper, Input, IncrementButton } from './InputField.styles.ts'

// type InputValue = string | number

interface Props {
    inputField: InputField
    onBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void
}

const InputField: React.FC<Props> = ({
    inputField: { id, name, type, placeholder, defaultValue, min, max, incrementBy },
    onBlurHandler
}) => {
    // const [value, setValue] = useState<InputValue>(0)
    const inputRef = useRef<HTMLInputElement>(null)

    // Set input field's value to the default at mount
    useEffect(() => {
        if (defaultValue != null && inputRef && inputRef.current) {
            inputRef.current.value = defaultValue.toString()
        }
    }, [defaultValue])

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

    const incrementNumberValue = () => {
        if (inputRef && inputRef.current && incrementBy !== undefined) {
            inputRef.current.focus()
            inputRef.current.value = (Number(inputRef.current.value) + incrementBy).toString()
            inputRef.current.blur()
        }
    }

    return (
        <Wrapper>
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
