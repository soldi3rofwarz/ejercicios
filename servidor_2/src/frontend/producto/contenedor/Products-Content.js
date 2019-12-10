import React, { Component } from 'react';
import Products from './../componentes/products';


class ProductsContent extends Component {

    constructor(props) {
        super(props);

        const datainf = [
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa1',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c2.jpg'),
                titulo: 'casa2',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c3.jpg'),
                titulo: 'casa3',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c5.jpg'),
                titulo: 'casa3',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa4',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa5',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa6',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa7',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa8',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa9',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa10',
                precio: '$ 3000',
            },

            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa11',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa12',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa13',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa14',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa15',
                precio: '$ 3000',
            },
            {
                imagen: require('./../../../assets/c1.jpg'),
                titulo: 'casa16',
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