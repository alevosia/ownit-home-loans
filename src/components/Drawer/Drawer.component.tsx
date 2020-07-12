import React, { useContext } from 'react'
import { DrawerContext } from '../../contexts/drawer'
import { Container, Links, Link, Close } from './Drawer.styles'

const Drawer: React.FC = () => {
    const { isOpen, close } = useContext(DrawerContext)
    return (
        <Container className={isOpen ? 'open' : 'closed'}>
            <Close onClick={close}>X</Close>
            <Links>
                <Link to="/" onClick={close}>
                    Home
                </Link>
                <Link to="/#about" onClick={close}>
                    Who We Are
                </Link>
                <Link to="/form" onClick={close}>
                    Get Started
                </Link>
                <Link to="/calculators" onClick={close}>
                    Calculators
                </Link>
                <Link to="/#footer" onClick={close}>
                    Contact
                </Link>
            </Links>
        </Container>
    )
}

export default Drawer
