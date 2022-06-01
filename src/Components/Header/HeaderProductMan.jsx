import React from 'react'
import HeaderProductComponent from './HeaderProductComponent'
import './header.css'
import LoNuevoHombre from '../../images/LoNuevoHombre.png'

const ProductMan = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FHcle.jpg?alt=media&token=249739d0-7894-46dd-bbcc-850812498f2e",
        title: "camisetas estampadas",
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FHcla.jpg?alt=media&token=580be9dd-63aa-49e7-a561-bb4d4790697e",
        title: "camisetas aplique",
    },
]


const HeaderProductMan = () => {
    return (
        <>
            <ul className="HeaderProductMan">
                <div className="HeaderProductMan__">
                    {
                        ProductMan.map((product, index) => {
                            return (
                                <li key={index}>
                                    <HeaderProductComponent HeaderProductImg={product.img} HeaderProductTitulo={product.title} HeaderProductAlt={product.title} />
                                </li>
                            )
                        })
                    }
                </div>
                <div className="HeaderProductMan__img">
                    <img src={LoNuevoHombre} alt="" />
                </div>
            </ul>
        </>
    )
}

export default (HeaderProductMan)
