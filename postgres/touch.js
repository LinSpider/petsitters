import Administrator from '.models/Administrator'
import Order from '.models/Order'
import Pet from '.models/Pet'
import Petsitter from '.models/Petsitter'
import Rewiew from '.models/Rewiew'
import User from '.models/User'

const touch = () =>{
    
    Pet.belongsTo(User, {foreignKey: 'user_id'}),

    Order.hasOne(Petsitter, {foreignKey: 'petsitter_id'}),
    Order.hasOne(Pet, {foreignKey: 'pet_id'}),

    Rewiew.belongsTo(Petsitter, {foreignKey: 'petsitter_id'}),
    Rewiew.belongsTo(User, {foreignKey: 'user_id'})
}
export default touch;