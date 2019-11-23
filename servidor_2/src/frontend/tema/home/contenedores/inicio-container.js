import React, { Component } from 'react';
import Inicio from '../componentes/body';

class InicioContenedor extends Component {

    constructor(props) {
        super(props);

        const datos = [
            {
                imagen: require('./../../../assets/imagenes/c1.jpg'),
                titulo: 'Imagen 1',
            },
            {
                imagen: require('./../../../assets/imagenes/c2.jpg'),
                titulo: 'Imagen 2',
            },
            {
                imagen: require('./../../../assets/imagenes/c3.jpg'),
                titulo: 'Imagen 3',
            },
        ];

        this.state = {
            datos: datos,
        };
    }

    render() {

        const { datos } = this.state;

        return (
            <Inicio
                imagenes={datos}
            />
        );

    }

}

export default InicioContenedor;