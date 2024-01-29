import LigneCommande from '../models/lignecommande.model.js';



export const createLigneCommande = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newLigneCommande = await LigneCommande.create(req.body);
        res.status(201).json(newLigneCommande);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du LigneCommande", error: error.message });
    }
};

// Obtenir tous les LigneCommandes
export const getAllLigneCommandes = async (req, res) => {
    try {
        const newLigneCommande = await LigneCommande.findAll();
        res.status(200).json(newLigneCommande);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des LigneCommandes", error: error.message });
    }
};


// Obtenir un LigneCommande par ID
export const getLigneCommandeById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newLigneCommande = await LigneCommande.findByPk(idProduit);
        if (newLigneCommande) {
            res.status(200).send(newLigneCommande);
        } else {
            res.status(404).send({ message: 'LigneCommande non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un LigneCommande



export const deleteLigneCommande = async (req, res, next) => {
    try {
      const newLigneCommande = await LigneCommande.findByPk(req.params.id);
      if (newLigneCommande) {
        await newLigneCommande.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un LigneCommande


export const updateLigneCommande = async (req, res, next) => {
    try {
      const newLigneCommande = await LigneCommande.findByPk(req.params.id);
      if (newLigneCommande) {
        await newLigneCommande.update(req.body);
        res.status(200).json(newLigneCommande);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };
















