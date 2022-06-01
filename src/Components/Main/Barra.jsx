import React from 'react'
import { FiTruck } from "react-icons/fi"
import { BsExclamationTriangle, BsHeart } from 'react-icons/bs'

import './main.css'

const BarraDatos = [
    {
        icon: <FiTruck />,
        description: "envíos a todo el país"
    },
    {
        icon: <BsExclamationTriangle />,
        description: "Precios al por mayor a partir de 6 prendas"
    },
    {
        icon: <BsHeart />,
        description: "Garantía en toda nuestra mercancía"
    }
]

const Barra = () => {
    return (
        <div className="barra">
            {
                BarraDatos.map((barra, index) => {
                    return (
                        <div key={index} className="barra__">
                            <div className="barra__icon">
                                {barra.icon}
                            </div>
                            <div className="barra__p">
                                <p>{barra.description}</p>
                            </div>
                        </div>
                    )
                })}
        </div>

    )


}

export default Barra
