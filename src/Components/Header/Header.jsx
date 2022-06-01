import React from 'react'
import Logo from '../../images/Logo.png'
import { BiShoppingBag } from 'react-icons/bi'
import './header.css'
import HeaderProductWoman from './HeaderProductWoman'
import HeaderProductMan from './HeaderProductMan'
import HeaderProductkids from './HeaderProductkids'
import MenuDespluegable from './menuDesplegable/MenuDespluegable'


const Header = () => {
    return (
        <div className="header">
            <MenuDespluegable />
            <a href="/" className="logo">
                <img src={Logo} alt="Mayoristas Colombia" className="logo__img" />
            </a>
            <div className="menu" >
                <ul className="menu__ul">
                    <li className="menu__mujer">
                        <a href="/" className="menu__a">mujer</a>
                        <div className="mujer__">
                            <HeaderProductWoman />
                        </div>
                    </li>
                    <li className="menu__hombre">
                        <a href="/" className="menu__a">hombre</a>
                        <div className="hombre__">
                            <HeaderProductMan className="headerComponent__hombre" />
                        </div>
                    </li>
                    <li className="menu__niño">
                        <a href="/" className="menu__a">niños</a>
                        <div className="niño__">
                            <HeaderProductkids />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="bolsa__icon">
                <a href="/">
                    <BiShoppingBag className="header__component" />
                </a>
            </div>
        </div>
    )
}

export default Header