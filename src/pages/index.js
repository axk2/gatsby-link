import React from 'react'
import Portada from '../components/Portada'
import { Link } from 'gatsby'
import '../styles/main.css'

const Home = () => {
    return (
        <div>
            <Portada
                parametro="portada"
            >
                <Link to="/contacto">
                    <h2>
                        Ir a Contacto
                    </h2>
                </Link>
            </Portada>
        </div>
    )
}

export default Home
