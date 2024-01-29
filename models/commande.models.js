import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';
import Client from '../models/client.model.js';
export const Commande = sequelize.define('Commande', {
    idcommande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cycle: {
        type: DataTypes.ENUM('Commencer', 'En preparation','Desseprêterts'),
        allowNull: false
    },
    statut: {
        type: DataTypes.ENUM('sur Place', 'Livraison'),
        allowNull: false
    },
    prixTotal: {
        type: DataTypes.DOUBLE,
        allowNull: false
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
  
  export default Commande;
  