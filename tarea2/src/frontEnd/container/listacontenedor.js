import React, { Component } from 'react';
import Inicio from './../component/inicio';

class InicioContenedor extends Component {

    constructor(props) {
        super(props);

        const datos = [
            {
                imagen: require('./../../assets/1.png'),
                nombre: 'Jose',
                apellido: 'Suarez',
                carnet: '15131512'
            },
            {
                imagen: require('./../../assets/1.png'),
                nombre: 'Pablo',
                apellido: 'Gerez',
                carnet: '15121212'
            },
            {
                imagen: require('./../../assets/1.png'),
                nombre: 'Petronilo',
                apellido: 'Angulo',
                carnet: '15721912'
            },
            {
                imagen: require('./../../assets/1.png'),
                nombre: 'Rosa',
                apellido: 'Mesta',
                carnet: '15171242'
            },
          
            
  
        ];

        this.state = {
            datos: datos,
            color: 'item'
        };
    }

    render() {

        const { datos, color } = this.state;

        const cambiarColor = () => {
            if(color==='item'){
                this.setState({color: 'item2'});
            }
            else{
                this.setState({color: 'item'});
            }
        }

        return (
            <Inicio
                color={color}
                cambiarColor={cambiarColor}
                imagenes={datos}
                button
            />
        );

    }

}

export default InicioContenedor;