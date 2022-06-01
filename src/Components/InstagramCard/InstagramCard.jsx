import React from 'react'
import InstagramCardComponent from './InstagramCardComponent'

const InstagramCard = () => {
    return (
        <>
            <InstagramCardComponent token={process.env.REACT_APP_INST_TOKEN} limit={10} />
        </>
    )
}

export default InstagramCard