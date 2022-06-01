import React from 'react'
import { ImFacebook } from 'react-icons/im'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

import './footer.css'
import FooterInfo from './FooterInfo'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__socialmedia">
                <div>
                    <a href="/"><ImFacebook /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/mayoristascolombia99/"><BsInstagram /></a>
                </div>
                <div>
                    <a href="/"><BsWhatsapp /></a>
                </div>
            </div>
            <FooterInfo />
            <div className="footer__informacionEmpresa">
                <h4>mayoristas<br />colombia</h4>
                <p>Medellín, Colombia<br />2021 Mayoristas Colombia</p>
            </div>
        </div>
    )
}

export default Footer
