import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env.TIPO);
const daos = {
    mongo: async () => {
      const {default: DAOProductosMongo} = await import('./productos/DAOProductosMongo.js');
      const {default: DAOCarritosMongo}  = await import('./carritos/DAOCarritosMongo.js');
      return {
        productosDAO: new DAOProductosMongo(),
        carritosDAO: new DAOCarritosMongo()
      };
    },
    mem: async () => {
        const {default: DAOProductosMem} = await import('./productos/DAOProductosMem.js');
        const {default: DAOCarritosMem}  = await import('./carritos/DAOCarritosMem.js');
        return {
          productosDAO: new DAOProductosMem(),
          carritosDAO:  new DAOCarritosMem()
        };
    },
    fb: async () => {
        const {default: DAOProductosFB} = await import('./productos/DAOProductosFB.js');
        const {default: DAOCarritosFB}  = await import('./carritos/DAOCarritosFB.js');
        return {
          productosDAO: new DAOProductosFB(),
          carritosDAO:  new DAOCarritosFB()
        };
    }
}

export default daos[process.env.TIPO];