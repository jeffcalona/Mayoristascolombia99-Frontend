import React from 'react'
import FooterInfoComponent from './FooterInfoComponent'
import './footer.css'

const footerInfo = [
    {
        titulo: "Horarios de atención",
        descipcion: ["lunes a viernes",<br />, "9:00 am a 6:00 pm"
        ],
        esLink: false
    },
    {
        titulo: "formas de pago",
        descipcion: ["contra entrega",<br />, "consignación"],
        esLink: true
    },
    {
        titulo: "whatsapp",
        descipcion: ["305 451 5059",<br />, "305 432 2679"],
        esLink: true
    }
]


const FooterInfo = () => {
    return (
        <div className="footerInfo">
            {
                footerInfo.map((info, index) => (
                    <div key={index} className="footerInfo__">
                        <FooterInfoComponent titulo={info.titulo} descripcion={info.descipcion} esLink={info.esLink} />
                    </div>
                ))
            }
        </div>
    )
}

export default FooterInfo
