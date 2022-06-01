import React from 'react'
import HeaderProductComponent from './HeaderProductComponent'
import './header.css'
import LoNuevoDama from '../../images/LoNuevoDama.png'

const ProductWoman = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FCdle.jpg?alt=media&token=3800a7c1-0271-4e0c-8aee-cd0d60b19b88",
        title: "camisetas",
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FDbca.jpg?alt=media&token=8020a2de-b175-4cb1-9ff4-011613923033",
        title: "blusones cortos"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FDbla.jpg?alt=media&token=fa97072d-37a1-48e8-a144-59da30311c71",
        title: "blusones largos"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FDbpd.jpg?alt=media&token=63abcbe1-b124-4302-98c7-f1df981ce754",
        title: "blusones piel de durazno"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FL.jpg?alt=media&token=cf406aa5-c81b-4a1c-a86d-9165c6994670",
        title: "leggins"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FB.jpg?alt=media&token=eb9a8f00-ce1e-4706-a6fc-496cb898a79f",
        title: "bikers"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FSb.jpg?alt=media&token=dbe37a95-a230-4656-8615-75d8df5184ad",
        title: "shorts"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FTe.jpg?alt=media&token=69701888-57b0-4245-93ac-4af890a5b7ed",
        title: "tops"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/webbodega-1e010.appspot.com/o/Header%2FBdy.jpg?alt=media&token=c97372a1-149a-4c8a-a570-e3e1f6c507a9",
        title: "bodys"
    },
]


const HeaderProductWoman = () => {
    return (
        <>
            <ul className="HeaderProductWoman">
                <div className="HeaderProductWoman__">
                    {
                        ProductWoman.map((product, index) => {
                            return (
                                <li key={index}>
                                    < HeaderProductComponent HeaderProductImg={product.img} HeaderProductTitulo={product.title} HeaderProductAlt={product.title} />
                                </li>
                            )
                        })
                    }
                </div>
                <div className="HeaderProductWoman__img">
                    <img src={LoNuevoDama} alt="" />
                </div>
            </ul>
        </>
    )
}

export default (HeaderProductWoman)
