// import DBConfig from './../configs/dbConfig.js';
import pkg from 'pg'
import  {Province,provinciasArray } from '../entities/province.js';
const { Client, Pool } = pkg;
export default class ProvinceRepository {
    getAllAsync = async () => {
        let returnArray = null;
        returnArray = provinciasArray;
        return returnArray;
    }
    getByIdAsync = async (id) => {
        let valorReturn = null;
        valorReturn = provinciasArray.find(p => p.id = id)
        return valorReturn;
    }
    createAsync = async (entity) => {
        provinciasArray.push(new Province(entity.id, entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order));
        return this.getAllAsync();
    }

    updateAsync = async (entity) => {
        let province = provinciasArray.find(p => p.id == entity.id)
        province.id = entity.id
        province.name = entity.name
        province.full_name = entity.full_name
        province.latitude = entity.latitude
        province.longitude = entity.longitude
        province.display_order = entity.display_order
        return this.getAllAsync();

    }
    deleteByIdAsync = async (id) => {
        let provinciaAborrarIndex = provinciasArray.findIndex(p => p.id == id);
        provinciasArray.splice(provinciaAborrarIndex, 1)[0];
        return this.getAllAsync();

    }
}