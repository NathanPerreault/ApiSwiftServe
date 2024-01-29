import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';
import Table from '../models/table.models.js';
export const Reservation = sequelize.define('Reservation', {
    idreservation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nombrepersonne: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    table: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Table,
            key: 'idtable', 
        },
    },
  }, {
    timestamps: false, 
  });
  
  export default Reservation;
  