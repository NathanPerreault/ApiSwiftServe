import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';


export const Employer = sequelize.define('Employer', {
    idemployer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
   
    courriel: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
  

  }, {
    timestamps: false, 

  
  });
  
  
  export default Employer;
  