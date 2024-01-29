import { Router } from 'express';
import {
  getAllLigneCommandes,
  getLigneCommandeById,
  createLigneCommande,
  updateLigneCommande,
  deleteLigneCommande,
} from '../controllers/lignecommande.controllers.js';

const router = Router();

router.get('/', getAllLigneCommandes);
router.get('/:id', getLigneCommandeById);
router.post('/', createLigneCommande);
router.put('/:id', updateLigneCommande);
router.delete('/:id', deleteLigneCommande);

export default router;