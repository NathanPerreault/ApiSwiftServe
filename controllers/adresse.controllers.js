import Adresse from '../models/adresse.model.js';



export const createAdresse = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newAdresse = await Adresse.create(req.body);
        res.status(201).json(newAdresse);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Adresse", error: error.message });
    }
};

// Obtenir tous les Adresses
export const getAllAdresses = async (req, res) => {
    try {
        const newAdresse = await Adresse.findAll();
        res.status(200).json(newAdresse);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Adresses", error: error.message });
    }
};


// Obtenir un Adresse par ID
export const getAdresseById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newAdresse = await Adresse.findByPk(idProduit);
        if (newAdresse) {
            res.status(200).send(newAdresse);
        } else {
            res.status(404).send({ message: 'Adresse non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Adresse



export const deleteAdresse = async (req, res, next) => {
    try {
      const newAdresse = await Adresse.findByPk(req.params.id);
      if (newAdresse) {
        await newAdresse.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Adresse


export const updateAdresse = async (req, res, next) => {
    try {
      const newAdresse = await Adresse.findByPk(req.params.id);
      if (newAdresse) {
        await newAdresse.update(req.body);
        res.status(200).json(newAdresse);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };
















