import Item from '../models/item.models.js';



export const createItem = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Item", error: error.message });
    }
};

// Obtenir tous les Items
export const getAllItems = async (req, res) => {
    try {
        const newItem = await Item.findAll();
        res.status(200).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Items", error: error.message });
    }
};


// Obtenir un Item par ID
export const getItemById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newItem = await Item.findByPk(idProduit);
        if (newItem) {
            res.status(200).send(newItem);
        } else {
            res.status(404).send({ message: 'Item non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Item



export const deleteItem = async (req, res, next) => {
    try {
      const newItem = await Item.findByPk(req.params.id);
      if (newItem) {
        await newItem.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Item


export const updateItem = async (req, res, next) => {
    try {
      const newItem = await Item.findByPk(req.params.id);
      if (newItem) {
        await newItem.update(req.body);
        res.status(200).json(newItem);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };
















