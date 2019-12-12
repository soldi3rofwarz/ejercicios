import React, { Component } from 'react';
import Registro from './../componentes/registro';
class registroCont extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categoria: '',
            guardado: false,
            categoriaResultado: '',
        };
    }

    render() {
        console.log("Estado: ", this.state);
        const { guardado, categoria, categoriaResultado } = this.state;
        return (
            <Registro
                eventoCambiarCategoria={this.eventoCambiarCategoria}
                eventoGuardar={this.guardar}
                guardado={guardado}
                categoria={categoria}
                categoriaResultado={categoriaResultado}
            />
        );
    }

    cambiarNombres = (event) => {
        this.setState({
            categoria: event.target.value,
        });
    }

    guardar = () => {
        const { categoria } = this.state;
        
        this.setState({
            guardado: true,
            categoria: '',
            categoriaResultado: categoria,
        });
    }
}

export default registroCont;