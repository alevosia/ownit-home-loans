import React, { createContext, useState } from 'react'

interface Context {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
}

export const DrawerContext = createContext<Context>({
    isOpen: false,
    open: () => {
        /* empty */
    },
    close: () => {
        /* empty */
    },
    toggle: () => {
        /* empty */
    }
})

export const DrawerProvider: React.FC = ({ children }) => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const open = () => setOpen(true)
    const close = () => setOpen(false)
    const toggle = () => setOpen(!isOpen)

    console.log(isOpen)

    return (
        <DrawerContext.Provider
            value={{
                isOpen,
                open,
                close,
                toggle
            }}
        >
            {children}
        </DrawerContext.Provider>
    )
}
