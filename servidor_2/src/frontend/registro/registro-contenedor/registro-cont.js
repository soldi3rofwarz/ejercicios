import React, { Component } from 'react';
import Registro from './../componentes/registro-producto';
import {registrarProducto} from './../../../lib/data/products-data'; 
import {Redirect}  from 'react-router-dom';

class registroCont extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            imagen: '',
            propietario:'',
            precio:'',
            ubicacion:'',
            categoria:'',
            redirect: '',
        };
    }

    eventoCambiarCategoria = (event) => {
        this.setState({
            categoria: event.target.value,
        });
    }

    eventoCambiarPrecio = (event) => {
        this.setState({
            precio: event.target.value,
        });
    }
    eventoCambiarPropietario = (event) => {
        this.setState({
            propietario: event.target.value,
        });
    }
    eventoCambiarUbicacion = (event) => {
        this.setState({
            ubicacion: event.target.value,
        });
    }
    eventoCambiarImagen = (event) => {
        this.setState({
            imagen: event.target.value,
        });
    }
    eventoCambiarTitulo = (event) => {
        this.setState({
            titulo: event.target.value,
        });
    }

    eventoGuardar = (event) => {
        const { categoria, imagen, precio, propietario, ubicacion, titulo} = this.state;
        
        registrarProducto({
             
            titulo,
            imagen,
            propietario,  
            precio, 
            ubicacion, 
            categoria,
        });
        this.setState({
            titulo: '',
            imagen: '',
            propietario:'',
            precio:'',
            ubicacion:'',
            categoria:'',
            redirect: '/',
        });
    }
    render() {
        console.log("Estado: ", this.state);
        const { 
            titulo,
            imagen,
            propietario,  
            precio, 
            ubicacion, 
            categoria,
            redirect, 
        } = this.state;

        if(redirect !== '') {
            return (
                <Redirect
                    to={redirect}
                />
            );
        }
        return (
            <Registro
                titulo={titulo}
                eventoCambiarTitulo={this.eventoCambiarTitulo}
                imagen={imagen}
                eventoCambiarImagen={this.eventoCambiarImagen}
                propietario={propietario}
                eventoCambiarPropietario={this.eventoCambiarPropietario}
                precio={precio}
                eventoCambiarPrecio={this.eventoCambiarPrecio}
                ubicacion={ubicacion}
                eventoCambiarUbicacion={this.eventoCambiarUbicacion}
                categoria={categoria}
                eventoCambiarCategoria={this.eventoCambiarCategoria}
                eventoGuardar={this.eventoGuardar}
            />
        );
    }
}

export default registroCont;