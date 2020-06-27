import React, { useRef, useEffect } from 'react'

import { Wrapper, LogoWrapper, LinksWrapper, Link } from './Navigation.styles'

import Logo from '../../assets/logo.png'

interface Props {
    fixed?: boolean
    transparent: boolean
}

const Navigation: React.FC<Props> = ({ fixed, transparent }) => {
    const navRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (navRef && navRef.current) {
            window.addEventListener('scroll', function () {
                if (navRef && navRef.current) {
                    if (
                        window.scrollY >
                        navRef?.current?.offsetTop + navRef?.current?.offsetHeight
                    ) {
                        console.log('Past!')
                        navRef.current.classList.add('opaque')
                    } else {
                        console.log('Nope!')
                        navRef.current.classList.remove('opaque')
                    }
                }
            })
        }
    }, [])

    return (
        <Wrapper id="nav" ref={navRef} fixed={fixed} transparent={transparent}>
            <LogoWrapper>
                <Link href="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </LogoWrapper>
            <LinksWrapper>
                <Link href="/">Home</Link>
                <Link href="/form">Form</Link>
                <Link href="/#footer">Contact</Link>
            </LinksWrapper>
        </Wrapper>
    )
}

export default Navigation
