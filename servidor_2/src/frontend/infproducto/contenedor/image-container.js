import React, { Component } from 'react';
import Imagen from './../componentes/producto';
import {seleccionarProducto} from './../../../lib/data/products-data';


 class ContDetalle extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            categoria: '',
            imagen: '',
            precio: '',
            propietario: '',
            titulo: '',
            ubicacion: '',
        };
     };
        render() {

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
            );
        };
        
    

        async componentDidMount() {
            const { productoId } = this.props.match.params;
            console.log(`Producto Id: ${productoId}`);
            const producto = await seleccionarProducto(productoId);
            const { categoria, imagen, precio, propietario, titulo, ubicacion, } = producto;
            console.log(producto);
            this.setState({
                categoria,
                imagen,
                precio,
                propietario,
                titulo,
                ubicacion,
            });
    } 
} 
export default ContDetalle;



