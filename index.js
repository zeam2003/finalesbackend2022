import daos from "./daos/index.js";

(async() => {
    const {productoDAO, carritoDAO} = await daos();
    await productoDAO.findAll({});
})();