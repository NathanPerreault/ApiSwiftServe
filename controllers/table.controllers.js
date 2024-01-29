import Table from '../models/table.models.js';



export const createTable = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newTable = await Table.create(req.body);
        res.status(201).json(newTable);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Table", error: error.message });
    }
};

// Obtenir tous les Tables
export const getAllTables = async (req, res) => {
    try {
        const newTable = await Table.findAll();
        res.status(200).json(newTable);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Tables", error: error.message });
    }
};


// Obtenir un Table par ID
export const getTableById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newTable = await Table.findByPk(idProduit);
        if (newTable) {
            res.status(200).send(newTable);
        } else {
            res.status(404).send({ message: 'Table non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Table



export const deleteTable = async (req, res, next) => {
    try {
      const newTable = await Table.findByPk(req.params.id);
      if (newTable) {
        await newTable.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Table


export const updateTable = async (req, res, next) => {
    try {
      const newTable = await Table.findByPk(req.params.id);
      if (newTable) {
        await newTable.update(req.body);
        res.status(200).json(newTable);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };
















