import React from 'react'

import { StyledAnchor } from './DownloadButton.styles'
interface Props {
    label: string
    fileUrl: string
}

const DownloadButton: React.FC<Props> = ({ label, fileUrl }) => (
    <StyledAnchor href={fileUrl} download target="_blank">
        {label}
    </StyledAnchor>
)

export default DownloadButton
