import React, { useEffect, useRef } from 'react'

import { ReactComponent as ArrowCircleUp } from '../../assets/arrow-circle-up-solid.svg'

import { Wrapper } from './ScrollToTop.styles'

const ScrollToTop: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    function scrollToTop() {
        window.scrollTo({ top: 0, left: 0 })
    }

    function checkScroll() {
        if (window.scrollY > window.innerHeight) {
            ref.current?.classList.add('show')
        } else {
            ref.current?.classList.remove('show')
        }
    }

    useEffect(() => {
        checkScroll()

        window.addEventListener('scroll', checkScroll)

        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [])

    return (
        <Wrapper ref={ref} onClick={scrollToTop}>
            <ArrowCircleUp />
        </Wrapper>
    )
}

export default ScrollToTop
