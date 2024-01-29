import { Router } from 'express';
import {
  getAllLivraisons,
  getLivraisonById,
  createLivraison,
  updateLivraison,
  deleteLivraison,
} from '../controllers/livraison.controllers.js';

const router = Router();

router.get('/', getAllLivraisons);
router.get('/:id', getLivraisonById);
router.post('/', createLivraison);
router.put('/:id', updateLivraison);
router.delete('/:id', deleteLivraison);

export default router;