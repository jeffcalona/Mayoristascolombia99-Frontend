import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { ProductWoman, ProductMan, ProductKids } from '../LinksProducts'

import './menuDesplegable.css'
import MenuDesplegableLinksComponent from './MenuDesplegableLinksComponent'

const MenuDespluegable = () => {

    const [menudesplegable, setMenudesplegable] = useState(false)
    const mostrarMenuDesplegable = () => setMenudesplegable(!menudesplegable)


    const [desplegableDama, setDesplegableDama] = useState(false)
    const mostrarDesplegableDama = () => setDesplegableDama(!desplegableDama)


    const [desplegableHombre, setDesplegableHombre] = useState(false)
    const mostrarDesplegableHombre = () => setDesplegableHombre(!desplegableHombre)

    const [desplegableNiños, setDesplegableNiños] = useState(false)
    const mostrarDesplegableNiños = () => setDesplegableNiños(!desplegableNiños)

    return (
        <div className="menuDesplegable">
            <BiMenu className="burger" onClick={mostrarMenuDesplegable} />
            <div className={menudesplegable ? "active-menuDesplegable" : "menuDesplegable__"}>
                <ul className="menuDesplegable__ul">
                    <li className="menuDesplegable-ul__li">
                        <span className="link-desplegable__span" onClick={mostrarDesplegableDama}>mujer</span>
                        <ul className={desplegableDama ? "active-desplegable__elementos" : "desplegable__elementos"}>
                            {
                                ProductWoman.map((product, index) => {
                                    return (
                                        <li key={index} className="desplegable-links__li">
                                            <MenuDesplegableLinksComponent DesplegableImg={product.img} DesplegableAlt={product.title} DesplegableTitle={product.title} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                    <li className="menuDesplegable-ul__li">
                        <span className="link-desplegable__span" onClick={mostrarDesplegableHombre}>hombre</span>
                        <ul className={desplegableHombre ? "active-desplegable__elementos" :  "desplegable__elementos"}>
                            {
                                ProductMan.map((product, index) => {
                                    return (
                                        <li key={index}>
                                            <MenuDesplegableLinksComponent DesplegableImg={product.img} DesplegableAlt={product.title} DesplegableTitle={product.title} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                    <li className="menuDesplegable-ul__li">
                        <span className="link-desplegable__span" onClick={mostrarDesplegableNiños}>niño</span>
                        <ul className={desplegableNiños ? "active-desplegable__elementos" :  "desplegable__elementos"}>
                            {
                                ProductKids.map((product, index) => {
                                    return (
                                        <li key={index}>
                                            <MenuDesplegableLinksComponent DesplegableImg={product.img} DesplegableAlt={product.title} DesplegableTitle={product.title} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuDespluegable