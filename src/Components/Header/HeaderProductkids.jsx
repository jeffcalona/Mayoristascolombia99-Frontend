import React from 'react'
import HeaderProductComponent from './HeaderProductComponent'
import './header.css'
import LoNuevoKids from '../../images/LoNuevoKids.png'

const ProductKids = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FNcle.jpg?alt=media&token=ce644f9e-23c0-4eee-92cd-ae0be32ca6c7",
        title: "camisetas estampadas"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FNcla.jpg?alt=media&token=a7098d7d-a182-47cf-8ed1-7b0c479a1d7f",
        title: "camisetas aplique"
    }
]


const HeaderProductkids = () => {
    return (
        <>
            <ul className="HeaderProductKids">
                <div className="HeaderProductKids__">
                {
                    ProductKids.map((product, index) => {
                        return (
                            <li key={index}>
                                <HeaderProductComponent HeaderProductImg={product.img} HeaderProductTitulo={product.title} HeaderProductAlt={product.title} />
                            </li>
                        )
                    })
                }
                </div>
                <div className="HeaderProductKids__img">
                    <img src={LoNuevoKids} alt="" />
                </div>
            </ul>
        </>
    )
}

export default (HeaderProductkids)
