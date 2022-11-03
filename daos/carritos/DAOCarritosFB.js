import ContainerFB from "../../containers/ContainerFB.js";

class DAOCarritosFB extends ContainerFB {
    constructor() {
        super('carritos', {
            name: {type: String, required: true},
            productos: {type:[], required: true, default: []}
        })
    }

    async addTime(){

    }
}

export default DAOCarritosFB;