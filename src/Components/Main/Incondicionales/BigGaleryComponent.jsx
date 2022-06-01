import React from 'react'
import './incondicionales.css'

const BigGaleryComponent = ({ IncondicionalesImg, IcondicionalesDescripcion, IncondionalesPrecio }) => {
    return (
        <>
            <div className="cards-bigGalery__img">
                <a href="/">
                    <img src={IncondicionalesImg} alt="" />
                </a> 
            </div>
            <div className="cards-bigGalery__texts">
                <p>{IcondicionalesDescripcion}</p>
                <p className="cards-bigGalery__precio">{IncondionalesPrecio}</p>
            </div>
        </>
    )
}

export default BigGaleryComponent
