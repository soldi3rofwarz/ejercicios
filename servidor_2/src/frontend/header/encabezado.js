import React from 'react';
import imagen from './../../assets/imagen.png';


const Encabezado = () => {
    return (
        <header className = 'contentall'> 
            <img className = 'imagen'
            src = {imagen}
            />
        <nav>
             <ul>
                <li><a >Inicio</a></li>
                <li><a >Contacto</a></li>
                <li><a >vista</a></li>
                <li><a >vista2</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Encabezado;
