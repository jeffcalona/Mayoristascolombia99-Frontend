import React from 'react'

const FooterInfoComponent = ({ titulo, descripcion, esLink }) => {
    return (
        <>
            <h4>{titulo}</h4>
            <p>{esLink ? <a href="/">{descripcion}</a> : descripcion }</p>
        </>
    )
}

export default FooterInfoComponent
