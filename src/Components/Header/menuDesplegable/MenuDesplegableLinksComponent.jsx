import React from 'react'
import './menuDesplegable.css'


const MenuDesplegableLinksComponent = ({ DesplegableImg, DesplegableAlt, DesplegableTitle }) => {
    return (
        <div className="desplegable-links">
            <img src={DesplegableImg} alt={DesplegableAlt} className="desplegable-links__img"/>
            <p className="desplegable-links__title">{DesplegableTitle}</p>
        </div>
    )
}

export default MenuDesplegableLinksComponent
