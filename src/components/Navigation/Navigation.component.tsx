import React, { useRef, useEffect } from 'react'
import { NavHashLink } from 'react-router-hash-link'

// assets
import Logo from '../../assets/logo.png'

// styles
import { Wrapper, LogoWrapper, LinksWrapper, NavLink } from './Navigation.styles'

interface Props {
    fixed?: boolean
    transparent: boolean
}

const Navigation: React.FC<Props> = ({ fixed, transparent }) => {
    const navRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (navRef && navRef.current) {
                if (window.scrollY > navRef?.current?.offsetTop + navRef?.current?.offsetHeight) {
                    navRef.current.classList.add('opaque')
                } else {
                    navRef.current.classList.remove('opaque')
                }
            }
        })
    }, [])

    return (
        <Wrapper id="nav" ref={navRef} fixed={fixed} transparent={transparent}>
            <LogoWrapper>
                <NavHashLink to="/#banner" id="logo" style={{ marginLeft: '0px' }}>
                    <img src={Logo} alt="logo" />
                </NavHashLink>
            </LogoWrapper>
            <LinksWrapper>
                <NavLink to="/#banner">Home</NavLink>
                <NavLink to="/#about">Who We Are</NavLink>
                <NavLink to="/form">Get Started</NavLink>
                <NavLink to="/#footer">Contact</NavLink>
            </LinksWrapper>
        </Wrapper>
    )
}

export default Navigation
