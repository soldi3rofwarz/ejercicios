import React from 'react';
import Header from './header';
import Footer from './footer';

const Tema = (props) => {

    const { children } = props;

    return (
        <>
            <Header/>
            <section>
                {children}
            </section>
            <Footer/>
        </>
    );
};

export default Tema;