import React, { Component } from 'react';
import Products from './../componentes/products';


class ProductsContent extends Component {

    constructor(props) {
        super(props);

        const datainf = [
            {
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

        return (
            <Products
                oferts={datainf}
            />
        );

    }

    async componentDidMount() {
        const oferts = await obtenerProductos();

        console.log("componentDidMount: Cargando datos de firestore");
        
        this.setState({
            datainf: oferts,
        });
    }

}

export default ProductsContent;