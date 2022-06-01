import React from 'react'

import './incondicionales.css'

const PrincipalesImg = ({ PrincipalImg, principalImgStyle }) => {
    return (
        <div className="card__principal">
            <div className="card-principal__img" style={principalImgStyle}>
                <img src={PrincipalImg} alt="IcondicionalesPrincipal"/>
            </div>
            <div className="card-principal__boton">
                <a href="/">comprar ahora</a>
            </div>
        </div>
    )
}

export default PrincipalesImg
