import React, { useRef, useEffect, useContext } from 'react'
import { NavHashLink } from 'react-router-hash-link'

// assets
import Logo from '../../assets/logo.png'

// styles
import { Wrapper, LogoWrapper, LinksWrapper, NavLink, MobileMenuButton } from './Navigation.styles'

// contexts
import { DrawerContext } from '../../contexts/drawer'

interface Props {
    fixed?: boolean
    transparent: boolean
}

const Navigation: React.FC<Props> = ({ fixed, transparent }) => {
    const { open } = useContext(DrawerContext)
    const navRef = useRef<HTMLDivElement | null>(null)

    function checkScroll() {
        if (navRef && navRef.current) {
            if (window.scrollY > navRef?.current?.offsetTop + navRef?.current?.offsetHeight) {
                navRef.current.classList.add('opaque')
            } else {
                navRef.current.classList.remove('opaque')
            }
        }
    }
    useEffect(() => {
        if (fixed) {
            window.addEventListener('scroll', checkScroll)
        }

        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [fixed])

    return (
        <Wrapper id="nav" ref={navRef} fixed={fixed} transparent={transparent}>
            <LogoWrapper>
                <NavHashLink to="/#banner" id="logo" style={{ marginLeft: '0px' }}>
                    <img src={Logo} alt="logo" />
                </NavHashLink>
            </LogoWrapper>
            <LinksWrapper>
                <NavLink to="/#banner">Home</NavLink>
                <NavLink to="/#about">About Us</NavLink>
                <NavLink to="/form">Get Started</NavLink>
                <NavLink to="/calculators">Calculators</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </LinksWrapper>
            <MobileMenuButton onClick={open}>Menu</MobileMenuButton>
        </Wrapper>
    )
}

export default Navigation
