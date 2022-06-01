import React, { useState } from 'react';
import AlertImg from '../../images/AlertImg.jpg'

import './alert.css'

const Alert = () => {

    const [botonAlerta, setObotonAlerta] = useState(false)
    const ocultarAlerta = () => setObotonAlerta (!botonAlerta)

  return (
        <div className={botonAlerta ? 'active-botonOcultarAlerta' : 'alert'}>
            <div className="alert__component">
                <div className="alert__titulo">
                    <h3>recuerda que:</h3>
                </div>
                <div className='alert-info-img__div'>
                    <div className='alert__informacion'>
                        <div className="alert-info">
                            <p className='alert-info__p'><mark>a partir de 6 prendas</mark> comienzan los precios al por mayor.</p>
                            <br/>
                            <p className='alert-info__p'>las prendas <mark>pueden ser surtidas</mark> en tallas colores y estilos.</p>
                        </div>
                    </div>
                    <div className="alert__img">
                        <img src={AlertImg} alt="AlertImg" />
                    </div>
                </div>
                <div className="alert__boton">
                    <button onClick={ocultarAlerta}>ok!</button>
                </div>
            </div>
        </div>
    )
};

export default Alert;
