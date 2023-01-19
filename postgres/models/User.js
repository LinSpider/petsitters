import { Sequelize } from "sequelize";
const sequelize = require('../index')

const User = sequelize.define(
    'user',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        field: 'name',
        type: Sequelize.STRING,
      },
      surname: {
        allowNull: false,
        field: 'surname',
        type: Sequelize.STRING,
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
      email:{
        allowNull: true,
        field: 'email',
        type: Sequelize.STRING,
      },
      phoneNumber:{
        allowNull: false,
        field: 'phone_number',
        type: Sequelize.STRING,
      }
    },
    {
      tableName: 'users',
      timestamps: false,
    },
  );
  
  export default User;