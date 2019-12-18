import React, { Component } from 'react';
import Products from '../componentes/products';
import {obtenerProductos, obtenerProductosCat, obtenerProductosTit} from '../../../lib/data/products-data';

class ProductsContent extends Component {

    
    
    constructor(props) {
        super(props);
            
        this.state = {

            datainf: []

        };
    }

    cambiarCategoria = async (categoria) =>{

        console.log("funcion")
        try{
            const oferts = await  obtenerProductosCat(categoria);
            console.log('categorias',oferts);
            this.setState({
                datainf: oferts,
            });
        }
        catch(e) {
            console.log("no cargo", e);
        }
    }

    cambiarTitulo = async (titulo) =>{

        console.log("funcion")
        try{
            const oferts = await  obtenerProductosTit(titulo);
            console.log('titulo',oferts);
            this.setState({
                datainf: oferts,
            });
        }
        catch(e) {
            console.log("no cargo", e);
        }
    }

    vertodos = async () =>{

        console.log("funcion")
        try{
            const oferts = await  obtenerProductos();

            console.log('esto funciona',oferts);

            console.log("componentDidMount: Cargando datos de firestore");
            
            this.setState({
                datainf: oferts,
            });
        }
        catch(e) {
            console.log("no cargo", e);
        }
    }

    
    render() {

        const {datainf}=this.state;

        return (
            <Products
                cambiarCategoria={this.cambiarCategoria} 
                cambiarTitulo={this.cambiarTitulo}
                vertodos={this.vertodos} 
                datos={datainf}
            />
        );

    }

    async componentDidMount() {
        
        try{
            const oferts = await  obtenerProductos();

            console.log('777777',oferts);

            console.log("componentDidMount: Cargando datos de firestore");
            
            this.setState({
                datainf: oferts,
            });
        }
        catch(e) {
            console.log("no cargo", e);
        }
    }

}

export default ProductsContent;