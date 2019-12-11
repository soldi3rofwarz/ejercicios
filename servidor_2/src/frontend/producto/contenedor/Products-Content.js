import React, { Component } from 'react';
import Products from './../componentes/products';
import {obtenerProductos} from './../../../lib/data/products-data';

class ProductsContent extends Component {

    constructor(props) {
        super(props);

        const datainf = [
            {
                id:"",
                imagen: require('./../../../assets/casas.png'),
                titulo: 'casa1',
                precio: '$ 3000',
            },
            
        ];

        this.state = {
            datainf: datainf,
        };
    }

    render() {

        const { datainf } = this.state;

        console.log(datainf);

        console.log(datainf);

        return (
            <Products
                oferts={datainf}
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