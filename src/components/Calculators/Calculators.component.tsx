import React from 'react'

const Calculators: React.FC<Calculator> = ({ id, name, src }) => (
    <iframe
        className="VisiCalcClass"
        id={id}
        src={src}
        title={name}
        frameBorder="0"
        scrolling="no"
    ></iframe>
)

export default Calculators
