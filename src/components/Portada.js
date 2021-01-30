import React from 'react'

const Portada = ({children, parametro}) => {
    return (
        <div className={parametro}>
            <div className="filtro">
                {children}
            </div>
        </div>
    )
}

export default Portada