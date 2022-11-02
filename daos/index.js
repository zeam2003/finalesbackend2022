import * as dotenv from 'dotenv';
dotenv.config();
process.env.tipo;

const daos = {
    mongo: async () => {
        const {default: DAOProductosMongo} = await import('./productos/DAOProductosMongo.js');
        const {default: DAOCarritosMongo} = await import('./carritos/DAOCarritosMongo.js');
        return {
            productoDAO: new DAOProductosMongo(),
            carritoDAO: new DAOCarritosMongo()
        }
    },
    mem: async () => {
        const {default: DAOProductosMem} = await import('./productos/DAOProductosMem.js');
        const {default: DAOCarritosMem} = await import('./carritos/DAOCarritosMem.js');
        return {
            productoDAO: new DAOProductosMem(),
            carritoDAO: new DAOCarritosMem()
        }
    }
}

export default daos[process.env.TIPO]();