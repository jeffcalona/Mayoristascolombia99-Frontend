import React from 'react'
import Alert from '../../Components/Alerta/Alert'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import InstagramCard from '../../Components/InstagramCard/InstagramCard'
import Main from '../../Components/Main/Main'
import Portada from '../../Components/Portada/Portada'

import './home.css'

function Home() {
    return (
        <div className='home'>
            <Alert />
            <Header />
            <Portada />
            <Main />
            <InstagramCard />
            <Footer />
        </div>
    )
}

export default Home
