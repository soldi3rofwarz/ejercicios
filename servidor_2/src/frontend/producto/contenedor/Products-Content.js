import React, { Component } from 'react';
import Products from './../componentes/products';


class ProductsContent extends Component {

    constructor(props) {
        super(props);

        const datainf = [
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa1',
            },
            {
                imagen: require('./../../../../assets/c2.jpg'),
                titulo: 'casa2',
            },
            {
                imagen: require('./../../../../assets/c3.jpg'),
                titulo: 'casa3',
            },
            {
                imagen: require('./../../../../assets/c5.jpg'),
                titulo: 'casa3',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa4',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa5',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa6',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa7',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa8',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa9',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa10',
            },

            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa11',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa12',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa13',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa14',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa15',
            },
            {
                imagen: require('./../../../../assets/c1.jpg'),
                titulo: 'casa16',
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
                alldata={datainf}
            />
        );

    }

    async componentDidMount() {
        const alldata = await obtenerProductos();

        console.log("componentDidMount: Cargando datos de firestore");
        
        this.setState({
            datainf: alldata,
        });
    }

}

export default ProductsContent;