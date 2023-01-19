const user = require("../../../AppData/Local/Temp/Temp1_demo.zip/demo/src/repository/user");
const { default: Petsitter } = require("../models/Petsitter");
const Petsitters = require("../models/Petsitter");

class PetsitterRepository{

    findWalking(walking){
        return Petsitter.findMany({where: {walking : true}})
    }

    findCare(care){
        return Petsitter.findMany({where: {care : true}})
    }

    findNanny(nanny){
        return Petsitter.findMany({where: {nanny : true}})
    }

    async create(petsitter){
        return await Petsitter.create(petsitter);

    }

    async update(id, data){
        return Petsitter.update(data, {where: {id: id}});
    }
    async delete(id) {

        return await Petsitter.destroy({ where: { id: id } });
        
      }
}
module.exports = new PetsitterRepository();