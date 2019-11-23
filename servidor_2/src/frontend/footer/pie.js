import React from 'react';
import fb from './../../assets/fb.png';
import ig from './../../assets/ig.png';
import twitter from './../../assets/twitter.png';


const Pie = () => {
    return (
        <footer className="footer">
            <a href="https://www.facebook.com">
                 <img
                    src={fb}width='23px'
                 />
            </a>
            <a href="https://twitter.com">
                <img
                    src={twitter}width='22px'
                />
            </a>
            <a href="https://instagram.com">
                <img
                src={ig}width='21px'
                />
            </a>
            <p>
            Copyright 2019
            </p>
    </footer>
    )
}

export default Pie;