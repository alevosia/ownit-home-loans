import React, { useRef, useEffect } from 'react'

import { Wrapper, LogoWrapper, LinksWrapper, NavLink } from './Navigation.styles'

import Logo from '../../assets/logo.png'

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
                <NavLink to="/#banner" id="logo">
                    <img src={Logo} alt="logo" />
                </NavLink>
            </LogoWrapper>
            <LinksWrapper>
                <NavLink to="/#banner">Home</NavLink>
                <NavLink to="/#about">Who are we</NavLink>
                <NavLink to="/form">Inquiry</NavLink>
                <NavLink to="/#footer">Contact</NavLink>
            </LinksWrapper>
        </Wrapper>
    )
}

export default Navigation
