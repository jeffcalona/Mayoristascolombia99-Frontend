import React from 'react'
import BigGaleryComponent from './BigGaleryComponent'

import './incondicionales.css'
import Links from './Links'
import PrincipalesImg from './PrincipalesImg'
import Titulo from './Titulo'

const BigGalery = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Incondicionales%2FBasicaEstampada.jpg?alt=media&token=258327ca-e4a3-4dc1-990f-64f2d9d778fd",
        descripcion: "camisetas estampadas",
        precio: "$14.500"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Incondicionales%2FBasicaAplique.jpg?alt=media&token=df8794b6-f264-415e-ae87-c7d4839cf71c",
        descripcion: "camisetas aplique",
        precio: "$15.500"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Incondicionales%2FBlusonCortoEstampado.jpg?alt=media&token=475bd1a0-1681-4bc2-b9e2-3662400c2fa6",
        descripcion: "blusones cortos estamp",
        precio: "$16.500"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Incondicionales%2FBlusonCortoAplique.jpg?alt=media&token=e5bcd60d-9a09-4525-869a-4f595e56d0c0",
        descripcion: "blusones cortos aplique",
        precio: "$17.990"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Incondicionales%2FBlusonSublimado.jpg?alt=media&token=95c43b58-7f91-4453-ade2-d27b79d8a4e7",
        descripcion: "blusones piel de durazno",
        precio: "$15.990"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Incondicionales%2FBlusonLargo.jpg?alt=media&token=771399d3-a87b-4c6d-9010-15b10924d957",
        descripcion: "blusones largos",
        precio: "$16.990"
    },
]

const LiknsInfo = [
    {
        href: "/",
        nombre: "básica"
    },
    {
        href: "/",
        nombre: "blusones"
    }
]



const Incondicionales = () => {
    return (
        <div className="container-card">
            <div className="card__header">
                <div className="card-header__titulo">
                    <Titulo h3="Incondicionales" />
                </div>
                <div className="card-header__links">
                    {
                        LiknsInfo.map((linkInfo, index) => {
                            return (
                                <Links LinksHref={linkInfo.href} LinksNombre={linkInfo.nombre} key={index} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="card">
                <PrincipalesImg PrincipalImg="https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Incondicionales%2FPrincipal.jpg?alt=media&token=48a44675-6d74-4267-ae28-414bb22a996c" principalImgStyle={{marginRight: 15 }}/>
                <div className="card__bigGalery">
                    {
                        BigGalery.map((galery, index) => {
                            return (
                                <div key={index} className="cards-bigGalery__elements">
                                    <BigGaleryComponent IncondicionalesImg={galery.img} IcondicionalesDescripcion={galery.descripcion} IncondionalesPrecio={galery.precio} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Incondicionales
