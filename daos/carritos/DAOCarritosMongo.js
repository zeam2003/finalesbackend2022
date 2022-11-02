import ContainerMongo from "../../containers/ContainerMongo";

class DAOCarritosMongo extends ContainerMongo {
    constructor() {
        super('carritos', {
            name: {type: String, required: true},
            productos: {type:[], required: true, default: []}
        })
    }

    async addTime(){

    }
}

export default DAOCarritosMongo;