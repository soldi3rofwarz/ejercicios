import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Imagen from './../componentes/compimagen'
import {obternerProducto} from './../../../lib/data/products-data';

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
                
                <div>
                    <Imagen
                    categoria={categoria}
                    imagen={imagen}
                    precio={precio}
                    propietario={propietario}
                    titulo={titulo}
                    ubicacion={ubicacion}  
                    />
                </div>
            )
        };
        
    

     async componentDidMount() {
        const { Id } = this.props.match.params;
        console.log(`Publicación Id: ${Id}`);
        /* const informacion = await seleccionarPublicacion(Id);
        const { categoria,imagen,precio,propietario,titulo,ubicacion } = informacion; */
        const producto = await obternerProducto(Id);
        const { categoria,imagen,precio,propietario,titulo,ubicacion } = producto;
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



