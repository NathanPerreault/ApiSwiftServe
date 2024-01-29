import Reservation from '../models/reservation.model.js';



export const createReservation = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newReservation = await Reservation.create(req.body);
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Reservation", error: error.message });
    }
};

// Obtenir tous les Reservations
export const getAllReservations = async (req, res) => {
    try {
        const newReservation = await Reservation.findAll();
        res.status(200).json(newReservation);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Reservations", error: error.message });
    }
};


// Obtenir un Reservation par ID
export const getReservationById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newReservation = await Reservation.findByPk(idProduit);
        if (newReservation) {
            res.status(200).send(newReservation);
        } else {
            res.status(404).send({ message: 'Reservation non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Reservation



export const deleteReservation = async (req, res, next) => {
    try {
      const newReservation = await Reservation.findByPk(req.params.id);
      if (newReservation) {
        await newReservation.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Reservation


export const updateReservation = async (req, res, next) => {
    try {
      const newReservation = await Reservation.findByPk(req.params.id);
      if (newReservation) {
        await newReservation.update(req.body);
        res.status(200).json(newReservation);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };
















