import React from 'react';

const registro = (props) => {

    const {
        eventoCambiarCategoria,
        categoria,
        categoriaResultado,

        eventoCambiarImagen,
        imagen,
        imagenResultado,

        eventoCambiarPrecio,
        precio,
        precioResultado,

        eventoCambiarPropietario,
        propietario,
        propietarioResultado,

        eventoCambiarTitulo,
        titulo,
        tituloResultado,

        eventoCambiarUbicacion,
        ubicacion,
        ubicacionResultado,
        
        eventoGuardar,
        guardado,
        
    } = props;

    return(
        <div>
            <h1>Categoria</h1>
            <input
                placeholder='Categoria'
                onChange={eventoCambiarCategoria}
                value={categoria}
            />
    
            <h1>Imagen</h1>
            <input type="file"
                placeholder='Imagen'
                onChange={eventoCambiarImagen}
                value={imagen}
            />

            <h1>Precio</h1>
            <input
                placeholder='Precio'
                onChange={eventoCambiarPrecio}
                value={precio}
            />

            <h1>Propietario</h1>
            <input
                placeholder='Propietario'
                onChange={eventoCambiarPropietario}
                value={propietario}
            />

            <h1>Título</h1>
            <input
                placeholder='Título'
                onChange={eventoCambiarTitulo}
                value={titulo}
            />
            <h1>Ubicacion</h1>
            <input
                placeholder='Ubicacion'
                onChange={eventoCambiarUbicacion}
                value={ubicacion}
            />
            
            <button
                onClick={eventoGuardar}
            >
                Guardar
            </button>
            {
                guardado === true && (<h1>{categoriaResultado}</h1>)
            }

        </div>
    );
};
export default registro;