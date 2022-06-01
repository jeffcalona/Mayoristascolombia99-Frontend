import React from 'react'
import Barra from './Barra'
import Deportivos from './Deportivos/Deportivos'
import Incondicionales from './Incondicionales/Incondicionales'
import Pantalones from './Pantalones/Pantalones'
import ParaEllos from './ParaEllos/ParaEllos'

const Main = () => {
    return (
        <>
           <Barra />
           <Incondicionales />
           <ParaEllos />
           <Deportivos />
           <Pantalones />
        </>
    )
}

export default Main
