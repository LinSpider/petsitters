import { Sequelize } from "sequelize";
const sequelize = require('../index')

const Petsitter = sequelize.define(
    'pet_sitter',
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
      addres: {
        allowNull: false,
        field: 'addres',
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
      },
      walking: {
        allowNull: false,
        field: 'walking',
        type: Sequelize.BOOLEAN,
      },
      care: {
        allowNull: false,
        field: 'care',
        type: Sequelize.BOOLEAN,
      },
      nanny: {
        allowNull: false,
        field: 'nanny',
        type: Sequelize.BOOLEAN,
      } 
    },
    {
      tableName: 'pet_sitters',
      timestamps: false,
    },
  );
  
  export default Petsitter;