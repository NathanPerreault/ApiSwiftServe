import Livraison from '../models/livraison.model.js';



export const createLivraison = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newLivraison = await Livraison.create(req.body);
        res.status(201).json(newLivraison);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Livraison", error: error.message });
    }
};

// Obtenir tous les Livraisons
export const getAllLivraisons = async (req, res) => {
    try {
        const newLivraison = await Livraison.findAll();
        res.status(200).json(newLivraison);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Livraisons", error: error.message });
    }
};


// Obtenir un Livraison par ID
export const getLivraisonById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newLivraison = await Livraison.findByPk(idProduit);
        if (newLivraison) {
            res.status(200).send(newLivraison);
        } else {
            res.status(404).send({ message: 'Livraison non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Livraison



export const deleteLivraison = async (req, res, next) => {
    try {
      const newLivraison = await Livraison.findByPk(req.params.id);
      if (newLivraison) {
        await newLivraison.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Livraison


export const updateLivraison = async (req, res, next) => {
    try {
      const newLivraison = await Livraison.findByPk(req.params.id);
      if (newLivraison) {
        await newLivraison.update(req.body);
        res.status(200).json(newLivraison);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };
















