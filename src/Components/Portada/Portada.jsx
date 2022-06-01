import React from 'react'
import PortadaImg from '../../images/Portada.jpg'
import './Portada.css'

function Portada() {
    return (
        <div className="portada">
            <div className="portadaContent">
                <div>
                    <p>somos fabricantes</p>
                    <h2 className="h2__bodega">bodega</h2>
                    <h2 className="h2__virtual">virtual</h2>
                </div>
                <div className="portadaContent__a">
                    <a href="/">comprar ahora</a>
                </div>
            </div>
            <div className='portadaImg'>
                <img src={PortadaImg} alt="" className="portada__img" />
            </div>
            
        </div>
    )
}

export default Portada
