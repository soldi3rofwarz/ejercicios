import React, { Component } from 'react';
import Imagen from '../componentes/image';



class Imagencontenedor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
    render() {

        const { datos } = this.props;

        

        return (
            <Imagen
                datos={datos}
            />
        );

    }

}

export default Imagencontenedor;