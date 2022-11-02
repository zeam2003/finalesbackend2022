import mongoose from "mongoose";
import config from '../conf/config.js';

await mongoose.connect(config.mongoDB.uri, config.mongoDB.options);

class ContainerMongo {
    constructor(coleccion, esquema){
        this.db = mongoose.model(coleccion, esquema);
    }

    async findById(id) {
        try {
            const data = await this.db.findOne({_id: id});
            return data;
        } catch (error) {
            throw new Error(error)
        } 
    }

    async findAll(){
        try {
            const data = await this.db.find({});
            return data;
        } catch (error) {
            throw new Error(error)
        }
    }

    async save(newDoc){
        try {
           const doc = await this.db.create(newDoc);
           return doc;
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(elem) {
        try {
            await this.db.replaceOne({_id: elem._id}, elem);
            return elem;
        } catch (error) {
            throw new Error(error)
        }
       
    }

    async delete(id){
        try {
            const {n,nDeleted} = await this.db.deleteOne({_id: id});
            return nDeleted > 0;
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteAll() {
        try {
            await this.db.deleteMany({});
        } catch (error) {
            throw new Error(error)
        }
    }

}

export default ContainerMongo;