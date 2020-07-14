import React from 'react'
import { Wrapper, Title } from './PageTitle.styles'

interface Props {
    title: string
}

const PageTitle: React.FC<Props> = ({ title }) => (
    <Wrapper>
        <Title data-aos="fade-in" data-aos-delay="0">
            {title}
        </Title>
    </Wrapper>
)

export default PageTitle
