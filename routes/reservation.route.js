import { Router } from 'express';
import {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
} from '../controllers/reservation.controllers.js';

const router = Router();

router.get('/', getAllReservations);
router.get('/:id', getReservationById);
router.post('/', createReservation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

export default router;