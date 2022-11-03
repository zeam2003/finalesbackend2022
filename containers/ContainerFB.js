import admin from 'firebase-admin';
import FirebaseDetails from '../conf/fsDB.js';

admin.initializeApp({
    credential: admin.credential.cert(FirebaseDetails)
})
const db = admin.firestore();

class ContainerFB {

    constructor(coleccion) {
        this.productos = db.collection(coleccion)
    }

    async save(elem) {
        try {
            console.log(elem)
            await this.productos.add(elem) 
            return elem;
        } catch (error) {
            throw new Error(error);
        }
       
       
    }

    async buscar() {
        const listar = await this.productos.get();
        listar.forEach((doc) => ({id: doc.id, ...doc.data()}));
        return doc;
    }
     
    async buscarElem(elem) {
        const prod = await this.productos.doc(elem).get();
        return {id: prod.id, ...prod.data()}
    }

    async actualizar(id, elem) {
        await this.productos.doc(id).set(elem);
    }

    async borrar(id) {
        await this.productos.doc(id).delete();
    }

}

export default ContainerFB;

