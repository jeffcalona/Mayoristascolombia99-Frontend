import React from 'react'

import "./pantalones.css"

const Pantalones = () => {
    return (
        <div className="pantalones">
            <div className="pantalones__img">
                <img src="https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Pantalones%2FPantalonesCard.png?alt=media&token=007f7625-0e99-471c-92c0-cac0cfb10f03" alt="Pantalones Card" />
            </div>
            <div className="pantalones-boton">
                <a href="/">
                    <div className="pantalones-boton__texts">
                        <h3>pantalones</h3>
                        <p>dama</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Pantalones
