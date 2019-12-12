import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Imagen from './../componentes/compimagen'
import {seleccionarPublicacion} from './../../../lib/data/products-data'

 class ContDetalle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categoria: '',
            imagen: '',
            precio: "",
            propietario: "",
            titulo: "",
            ubicacion: "",
        };
     };
        render(){
           const {
            categoria,
            imagen,
            precio,
            propietario,
            titulo,
            ubicacion,
            } = this.state;

             

            return(
                
                    <Imagen
                    categoria={categoria}
                    imagen={imagen}
                    precio={precio}
                    propietario={propietario}
                    titulo={titulo}
                    ubicacion={ubicacion}  
                    />
                
            )
        };
        
    

     async componentDidMount() {
        const { Id } = this.props.match.params;
        console.log(`Publicación Id: ${Id}`);
        const informacion = await seleccionarPublicacion(Id);
        const { categoria,imagen,precio,propietario,titulo,ubicacion } = informacion;
        this.setState({
            categoria,
            imagen,
            precio,
            propietario,
            titulo,
            ubicacion
        });
    } 
} 
export default ContDetalle;



