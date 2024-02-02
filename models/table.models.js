import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';


export const Table = sequelize.define('Table', {
    idtable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
    nombreplace: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    disponibilites: {
        type: DataTypes.ENUM('Disponible', 'Non Disponible'),
        allowNull: false
    },
    
   
  }, {
    timestamps: false, 
  });
  
  export default Table;
  