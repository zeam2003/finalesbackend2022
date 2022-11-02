import ContainerMongo from "../../containers/ContainerMongo.js";

class DAOProductosMongo extends ContainerMongo {
    constructor() {
        super('producos', {
            name: {type: String, required: true},
            cat: {type: String, required: true},
            desc: {type: String, required: true},
            img: {type: String, required: true}
           
        })
    }

    async addTime(){

    }
}

export default DAOProductosMongo;