import ContainerFB from "../../containers/ContainerFB.js";

class DAOProductosFB extends ContainerFB {
    constructor() {
        super('productos', {
            name: {type: String, required: true},
            cat: {type: String, required: true},
            desc: {type: String, required: true},
            img: {type: String, required: true}
           
        })
    }

    async addTime(){

    }
}

export default DAOProductosFB;