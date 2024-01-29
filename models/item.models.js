import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/config.js';



export const Item = sequelize.define('Item', {
    iditem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       
    },
    titre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    prix: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    categorie: {
        type: DataTypes.ENUM('Entrées', 'Plats','Desserts', 'Boissons'),
        allowNull: false
    },
    disponibilite: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
   
  }, {
    timestamps: false, 
  });
  
  export default Item;
  