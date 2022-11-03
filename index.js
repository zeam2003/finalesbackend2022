import daos from "./daos/index.js";

(async () => {
    const {productosDAO, carritosDAO} = await daos();
    await productosDAO.save({
        name: 'pepe',
        cat: 'tortas',
        desc: 'prueba',
        img: 'dasfas'
    });
})();