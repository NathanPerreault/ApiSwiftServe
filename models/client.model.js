import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';


export const Client = sequelize.define('Client', {
    idclient: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
    nom: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    adresse: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
  
   



  }, {
    timestamps: false, 

  
  });
  
  
  export default Client;
  