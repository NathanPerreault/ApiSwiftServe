import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';
import Client from '../models/client.model.js';

export const Adresse = sequelize.define('Adresse', {
    idadrese: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
    numerorue: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    codepostal: {
        type: DataTypes.STRING(5),
        allowNull: false,
       
    },
    ville: {
        type: DataTypes.STRING(20),
        allowNull: false,
       
    },
    client: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Client,
            key: 'idclient', 
        },
    },
  

  }, {
    timestamps: false, 

  
  });
  
  
  export default Adresse;
  