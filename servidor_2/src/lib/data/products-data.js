import db from './firestore-config';

const CLAVE_PRODUCTO = 'producto';

export const obtenerProductos = async () => {
    const querySnapShot = await db.collection(CLAVE_PRODUCTO).get();
    const producto = [];
    querySnapShot.forEach((documento)=> {
        producto.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return producto;
}

export const obtenerProductosCat = async (ValorCategoria) => {
    const querySnapShot = await db.collection(CLAVE_PRODUCTO).get();
    const producto = [];
    querySnapShot.forEach((documento)=> {
        if(documento.data().categoria===ValorCategoria){
            producto.push({
                id: documento.id,
                ...documento.data(),

            });
        };
    });
    return producto;
}

export const seleccionarProducto = async (productoId) => {
    const querySnapshot = await db.collection(CLAVE_PRODUCTO).doc(productoId).get();
    let producto = {};
    if(querySnapshot.exists) {
        producto = {
            ...querySnapshot.data()
        };
    }
    return producto;
}

    export const guardarProducto = async (producto) => {
        await db.collection(CLAVE_PRODUCTO).add(
            producto
        );
    }

    export const actualizarProducto = async (productoId, producto) => {
        await db.collection(CLAVE_PRODUCTO).doc(productoId).update(
            producto
        );
    }

    export const eliminarProducto = async (productoId) => {
        await db.collection(CLAVE_PRODUCTO).doc(productoId).delete();
    }
