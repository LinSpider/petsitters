import { Sequelize } from "sequelize";
const sequelize = require('../index')

const Order = sequelize.define(
    'order',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      type_of_service: {
        allowNull: false,
        field: 'type_of_services',
        type: Sequelize.STRING,
      },
      petsitter_id: {
        allowNull: false,
        field: 'id_of_petsitter',
        type: Sequelize.BIGINT,
      },
      
      pet_Id: {
        allowNull: false,
        field: 'id_of_pet',
        type: Sequelize.BIGINT,
      },
      price: {
        allowNull: false,
        field: 'price',
        type: Sequelize.INTEGER,
      },
     
    },
    {
      tableName: 'orders',
      timestamps: false,
    },
  );
  
  export default Order;