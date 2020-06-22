import React from 'react'

import { Wrapper, LogoWrapper, LinksWrapper, Link } from './Navigation.styles'

import Logo from '../../assets/logo.png'

const Navigation: React.FC = () => {
    return (
        <Wrapper id="Navigation">
            <LogoWrapper>
                <Link href="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </LogoWrapper>
            <LinksWrapper>
                <Link href="#">Home</Link>
                <Link href="/">Form</Link>
                <Link href="#">Contact</Link>
            </LinksWrapper>
        </Wrapper>
    )
}

export default Navigation
