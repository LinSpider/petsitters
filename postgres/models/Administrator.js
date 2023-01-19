import { Sequelize } from "sequelize";
const sequelize = require('../index')

const Administrator = sequelize.define(
    'administrator',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      login: {
        allowNull: false,
        field: 'login',
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        field: 'password',
        type: Sequelize.STRING,
      },
      
    },
    {
      tableName: 'administrators',
      timestamps: false,
    },
  );
  
  export default Administrator;