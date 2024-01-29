import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';
import Commande from '../models/commande.models.js';
import Item from '../models/item.models.js';

export const LigneCommande = sequelize.define('LigneCommande', {
    idilignecommande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
    commande: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Commande,
            key: 'idcommande', 
        },
    },
    itemId: {  
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Item,
            key: 'iditem', 
        },
    },
   
    prix: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
   
   
  }, {
    timestamps: false, 
  });
  
  export default LigneCommande;
  