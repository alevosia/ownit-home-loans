import React, { useContext } from 'react'
import { DrawerContext } from '../../contexts/drawer'
import { Container, Links, Link, Close } from './Drawer.styles'

const Drawer: React.FC = () => {
    const { isOpen, close } = useContext(DrawerContext)
    return (
        <Container className={isOpen ? 'open' : 'closed'}>
            <Close onClick={close}>&times;</Close>
            <Links>
                <Link to="/#banner" onClick={close}>
                    Home
                </Link>
                <Link to="/#about" onClick={close}>
                    About Us
                </Link>
                <Link to="/form" onClick={close}>
                    Get Started
                </Link>
                <Link to="/calculators" onClick={close}>
                    Calculators
                </Link>
                <Link to="/contact" onClick={close}>
                    Contact Us
                </Link>
            </Links>
        </Container>
    )
}

export default Drawer
