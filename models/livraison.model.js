import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';
import Client from '../models/client.model.js';
import Commande from '../models/commande.models.js';
export const Livraison = sequelize.define('Livraison', {
    idlivraison: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            const dateLivraison = this.getDataValue('date');
           
            const dateLivraisonAnneeMinute = `${dateLivraison.getDate()}/${dateLivraison.getMonth() + 1}/${dateLivraison.getFullYear()} ${dateLivraison.getHours()}:${dateLivraison.getMinutes()}`;
            return dateLivraisonAnneeMinute;
        },
    },
    commande: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Commande,
            key: 'idcommande', 
        },
    },
   
    client: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Client,
            key: 'idclient', 
        },
    },
    statutLivraison: {
        type: DataTypes.ENUM('Livrê', 'En attente'),
        allowNull: false
    },

adresse :{
    type : DataTypes.STRING(300),
    allowNull: false
}

  }, {
    timestamps: false, 
  });
  
  export default Livraison;
  