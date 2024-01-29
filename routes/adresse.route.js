import { Router } from 'express';
import {
  getAllAdresses,
  getAdresseById,
  createAdresse,
  updateAdresse,
  deleteAdresse,
} from '../controllers/adresse.controllers.js';

const router = Router();

router.get('/', getAllAdresses);
router.get('/:id', getAdresseById);
router.post('/', createAdresse);
router.put('/:id', updateAdresse);
router.delete('/:id', deleteAdresse);

export default router;