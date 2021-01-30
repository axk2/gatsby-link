import React from 'react'
import Portada from '../components/Portada'
import { Link } from 'gatsby'
import '../styles/main.css'

const Contacto = () => {
    return (
        <Portada
            parametro="portada2"
        >
            <Link to="/">
                <h2>
                    Ir a Inicio
                </h2>
            </Link>
        </Portada>
    )
}

export default Contacto