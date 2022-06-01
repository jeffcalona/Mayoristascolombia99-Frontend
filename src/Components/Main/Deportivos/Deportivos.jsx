import React from 'react'
import Titulo from '../Incondicionales/Titulo'

import '../Incondicionales/incondicionales.css'
import Links from '../Incondicionales/Links'
import PrincipalesImg from '../Incondicionales/PrincipalesImg'
import BigGaleryComponent from '../Incondicionales/BigGaleryComponent'

const LinkInfo = [
    {
        href: "/",
        nombre: "leggins"
    },
    {
        href: "/",
        nombre: "camisillas"
    },
    {
        href: "/",
        nombre: "tops"
    },
    {
        href: "/",
        nombre: "shorts"
    },
    {
        href: "/",
        nombre: "boddy"
    }
]

const BigGalery = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Deportivos%2FLeggins.jpg?alt=media&token=724ca860-3cb1-4409-b48a-9a8a67a47d84",
        descripcion: "leggins",
        precio: "$14.990"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Deportivos%2FTops.jpg?alt=media&token=2ebe781c-cf3d-4a4a-ac9b-3f72b7f17c99",
        descripcion: "tops",
        precio: "$12.990"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Deportivos%2FCamicillasDeportivasjpg.jpg?alt=media&token=7a4444f1-8afe-403c-a970-b11ea3e47d22",
        descripcion: "camisillas deportivas",
        precio: "$13.990"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Deportivos%2FBikers.jpg?alt=media&token=b1575d04-cad4-41e8-8b3c-bb704b5d3290",
        descripcion: "bikers",
        precio: "$14.990"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Deportivos%2FShortsBolsillos.jpg?alt=media&token=0a1ef45b-4a80-48b5-a37a-feb2b7328f6c",
        descripcion: "shorts bolsillo",
        precio: "$13.990"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Deportivos%2FBoddys.jpg?alt=media&token=cf206ca5-1665-4c5e-aabd-69630847a72f",
        descripcion: "boddys",
        precio: "$15.990"
    }
]

const Deportivos = () => {
    return (
        <div className="container-card">
            <div className="card__header">
                <div className="card-header__links">
                    {
                        LinkInfo.map((linkInfo, index) => {
                            return ( 
                                <Links LinksHref={linkInfo.href} LinksNombre={linkInfo.nombre} key={index} />
                            )
                        })
                    }
                </div>
                <div className="card-header__titulo">
                    <Titulo h3="deportivos"/>
                </div>
            </div>
            <div className="card">
                <div className="card__bigGalery">
                    {
                        BigGalery.map((galery, index) => {
                            return (
                                <div key={index} className="cards-bigGalery__elements">
                                    <BigGaleryComponent IncondicionalesImg={galery.img} IcondicionalesDescripcion={galery.descripcion} IncondionalesPrecio={galery.precio}/>
                                </div>
                            )
                        })
                    }
                </div>
                <PrincipalesImg PrincipalImg="https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Deportivos%2FPrincipal.jpg?alt=media&token=db0cf625-0917-492b-baef-7357b153c24b" principalImgStyle={{marginLeft: 15 }}/>
            </div>
        </div>
    )
}

export default Deportivos
