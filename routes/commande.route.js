import { Router } from 'express';
import {
  getAllCommande,
  getCommandeById,
  createCommande,
  updateCommande,
  deleteCommande,
} from '../controllers/commande.controller.js';

const router = Router();

router.get('/', getAllCommande);
router.get('/:id', getCommandeById);
router.post('/', createCommande);
router.put('/:id', updateCommande);
router.delete('/:id', deleteCommande);

export default router;