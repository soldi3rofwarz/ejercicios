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
