import React from 'react';
import fb from './../../../assets/fb.png'
import tw from './../../../assets/twitter.png'
import ig from './../../../assets/ig.png'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    (theme) => ({
        
        foot: {
            fontWeight: '600',
            fontSize: '15px',
            textAlign: 'center',
            marginTop: '25px',
            background: '#20232a',
            height:'auto',
            color:'white',
            paddingTop:'30px',
            paddingBottom:'30px',
        },
    })
);

const Pie = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer} >
            <div className={classes.foot}>
                <p>
                    Teléfono: +(505) 8520-2508 | Email: info@bienesraices.com
                </p>
                
                <a href="https://facebook.com/">
                    <img
                        src={fb} width='67px'
                    />
                </a>
                <a href="https://twitter.com/">
                    <img
                        src={tw} width='60px'
                    />
                </a>
                <a href="https://instagram.com/">
                    <img
                        src={ig} width='60px'
                    />
                </a>

                <p>
                    Estamos ubicados de Gasolinera PUMA, 800 metros al oeste, 1 km al norte, Juigalpa, Chontales
                </p>
                <p>
                    Copyright © 2019 
                </p>
            </div>
        </footer>
    );
};

export default Pie;