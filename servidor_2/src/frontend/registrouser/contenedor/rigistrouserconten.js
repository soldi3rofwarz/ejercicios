import React, { Component } from 'react';
import Registro from './../componentes/registro';
import {
    addUser,
} from './../../../lib/data';

import {
    Redirect,
} from 'react-router-dom';

class RegitroUserContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            phone: '',
            password: '',
            confirm: '',

            estado: '',
        };
    }

    render() {

        const {
            email,
            phone,
            password,
            confirm,
            estado,

            errorGeneral,
            errorEmail,
            errorPhone,
            errorPassword,
            errorConfirm,
        } = this.state;

        if(estado === 'registrado') {
            return (
                <Redirect
                    to='/'
                />
            );
        }

        return (
            <Registro
                email={email}
                onChangeEmail={this.handleChangeEmail}
                phone={phone}
                onChangePhone={this.handleChangePhone}
                password={password}
                onChangePassword={this.handleChangePassword}
                confirm={confirm}
                onChangeConfirm={this.handleChangeConfirm}
                estado={estado}

                onRegister={this.handleRegister}

                errorGeneral={errorGeneral}
                errorEmail={errorEmail}
                errorPhone={errorPhone}
                errorPassword={errorPassword}
                errorConfirm={errorConfirm}
                messageClose={this.messageClose}
            />
        );

    }

    eventoChangeEmail = (event) => this.setState({ email: event.target.value });
    eventoChangePhone = (event) => this.setState({ phone: event.target.value });
    eventoChangePassword = (event) => this.setState({ password: event.target.value });
    eventoChangeConfirm = (event) => this.setState({ confirm: event.target.value });

    eventoRegistrarse = () => {
        const validating = this.validate();
        if(validating) {
            const {
                email,
                phone,
                password,
            } = this.state;
            this.loading();
            addUser({
                email,
                phone,
                password,
            })
            .then(() => {
                this.reinitialize();
            })
            .catch((e) => {
                console.log("Erroooooooooooor!!!!!", e);
                this.error(e);
            });
        }
    };

    loading = () => {
        this.setState({
            estado: 'cargando',
        });
    };

    reinitialize = () => {
        this.setState({
            estado: 'registrado',
            email: '',
            phone: '',
            password: '',
            confirm: '',
        });
    };

    validate = () => {
        let errorEmail,
            errorPhone,
            errorPassword,
            errorConfirm;
        const {
            email,
            phone,
            password,
            confirm,
        } = this.state;
        if(!email) errorEmail = 'E-mail obligatorio';
        if(!phone) errorPhone = 'Teléfono obligatorio';
        if(!password) {
            errorPassword = 'Contraseña obligatorio';
            if(!confirm) errorConfirm = 'Confirmación obligatorio';
        }
        else {
            if(password !== confirm) errorConfirm = 'Las contraseñas no coinciden';
        }
        this.setState({
            estado: 'error',
            errorEmail,
            errorPhone,
            errorPassword,
            errorConfirm,
        });
        if(!errorEmail && !errorPhone && !errorPassword && !errorConfirm)
            return true;
        else
            return false;
    };

    error = (e) => {
        let errorGeneral,
            errorEmail,
            errorPassword;

        switch (e.code) {
            case 'auth/invalid-email':
                errorEmail = 'E-mail inválido';
                break;
            case 'auth/email-already-in-use':
                errorEmail = 'Otro usuario ya tiene una cuenta con este correo';
                break;
            case 'auth/weak-password':
                errorPassword = 'Contraseña inválida. Debe tener al menos 6 caracteres';
                break;
            default:
                errorGeneral = e.message;
                break;
        }
        this.setState({
            estado: 'error',
            errorGeneral,
            errorEmail,
            errorPassword,
        });
    };

    messageClose = () => {
        this.setState({
            errorGeneral: '',
        });
    };

}

export default RegitroUserContent;