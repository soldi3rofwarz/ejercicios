import React from 'react';


const AllImagen = (props) => {

    const { dato } = props;

    return (
        <div>
            <article className='galeria-imagen'>
                <h1
                    className='titulo'
                >
                    {dato.titulo}
                </h1>
                <img
                    className='imagen'
                    src={dato.imagen}
                    alt={dato.titulo}
                />
            </article>
        </div>
    );

};
export default AllImagen;