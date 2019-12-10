import React from 'react';
import Header from './header';

const Tema = (props) => {

    const { children } = props;

    return (
        <>
            <Header />
            <section>
                {children}
            </section>
        </>
    );
};

export default Tema;