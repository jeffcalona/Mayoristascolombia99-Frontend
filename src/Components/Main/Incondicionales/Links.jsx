import React from 'react'

const Links = ({ LinksHref, LinksNombre }) => {
    return (
        <>
            <a href={LinksHref} >{LinksNombre}</a>
        </>
    )
}

export default Links
