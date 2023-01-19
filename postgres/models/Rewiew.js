import { Sequelize } from "sequelize";
const sequelize = require('../index')

const Rewiew = sequelize.define(
    'rewiew',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      petsitter_id: {
        allowNull: false,
        field: 'id_of_petsitter',
        type: Sequelize.BIGINT,
      },
      
      user_Id: {
        allowNull: false,
        field: 'id_of_user',
        type: Sequelize.BIGINT,
      },
      rewiew_text: {
        allowNull: false,
        field: 'rewiew',
        type: Sequelize.TEXT,
      },
     
    },
    {
      tableName: 'rewiews',
      timestamps: false,
    },
  );
  
  export default Rewiew;