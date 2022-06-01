import React from 'react'

import './paraEllos.css'

const Ellos = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/ParaEllos%2FHombreEstampadas.jpg?alt=media&token=eae2d961-e754-4f14-98d3-dadd8d6610a2",
        descripcion: "camisetas estampadas",
        precio: "$17.990"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/ParaEllos%2FHombresAplique.jpg?alt=media&token=40398ae8-74fa-4a57-9312-a6da2b22693b",
        descripcion: "camisetas con aplique",
        precio: "$18,990"
    }
]

const ParaEllos = () => {
    return (
        <div className="paraEllos">
            <div className="paraEllos__camisetas">
                <div className='paraEllos__h3'>
                    <h3>para ellos</h3>
                </div> 
                <div className="paraEllos-camistas__tipos">
                    {
                        Ellos.map((ellos, index) => {
                            return (
                                <div key={index} className="paraEllos-camistas__tipo">
                                    <div className="paraEllos-camistas-tipo__img">
                                        <img src={ellos.img} alt={ellos.descripcion} />
                                    </div>
                                    <div className="paraEllos-camistas-tipo__text">
                                        <p>{ellos.descripcion}</p>
                                        <p className="paraEllos-camistas-tipo-text__precio">{ellos.precio}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="paraEllos__img">
                <img src="https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/ParaEllos%2FhombresPrincipal.jpg?alt=media&token=09d95bcd-27db-4913-91f3-6710243d4e0b" alt="Camisetas caballero"/>
            </div>
        </div>
    )
}

export default ParaEllos
