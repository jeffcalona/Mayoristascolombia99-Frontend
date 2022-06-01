import React from 'react'

const HeaderProductComponent = ({ HeaderProductImg, HeaderProductTitulo, HeaderProductAlt }) => {
    return (
        <div className="productComponent">
            <a href="/" className="productComponent__a">
                <img className="productComponent__img" src={HeaderProductImg} alt={HeaderProductAlt} />
                <p className="productComponent__p">{HeaderProductTitulo}</p>
            </a>
        </div>
    )
}

export default HeaderProductComponent