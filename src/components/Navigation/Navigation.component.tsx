import React from 'react'

import { Wrapper, LogoWrapper, LinksWrapper, Link } from './Navigation.styles'

import Logo from '../../assets/logo.png'

interface Props {
    fixed?: boolean
    transparent: boolean
}

const Navigation: React.FC<Props> = ({ fixed, transparent }) => {
    return (
        <Wrapper id="Navigation" fixed={fixed} transparent={transparent}>
            <LogoWrapper>
                <Link href="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </LogoWrapper>
            <LinksWrapper>
                <Link href="/">Home</Link>
                <Link href="/form">Form</Link>
                <Link href="#footer">Contact</Link>
            </LinksWrapper>
        </Wrapper>
    )
}

export default Navigation
