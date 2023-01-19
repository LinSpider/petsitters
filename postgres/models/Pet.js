import { Sequelize } from "sequelize";
const sequelize = require('../index')

const Pet = sequelize.define(
    'pet',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      id_of_owner: {
        allowNull: false,
        field: 'id_of_owner',
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        field: 'name',
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        field: 'type',
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'pets',
      timestamps: false,
    },
  );
  
  export default Pet;