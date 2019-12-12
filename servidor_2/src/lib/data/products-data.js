import db from './firestore-config';

const CLAVE_INFORMACION = 'producto';

export const obtenerProductos = async () => {
    const querySnapShot = await db.collection(CLAVE_INFORMACION).get();
    const informacion = [];
    querySnapShot.forEach((documento)=> {
        informacion.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return informacion;
}

export const seleccionarPublicacion = async (Id) => {
    const querySnapshot = await db.collection(CLAVE_INFORMACION).doc(Id).get();
    let informacion = {};
    if(querySnapshot.exists) {
        informacion = {
            ...querySnapshot.data()
        };
    }
    return informacion;
}

    export const guardarInformacion = async (informacion) => {
        await db.collection(CLAVE_INFORMACION).add(
            informacion
        );
    }

    export const actualizarInformacion = async (informacionId, informacion) => {
        await db.collection(CLAVE_INFORMACION).doc(informacionId).update(
            informacion
        );
    }

    export const eliminarInformacion = async (informacionId) => {
        await db.collection(CLAVE_INFORMACION).doc(informacionId).delete();
    }
