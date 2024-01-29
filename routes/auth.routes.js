import { Router } from 'express';
import {
    registerClient,
    loginClient,
    updateClient,
    deleteClient,
  
} from '../controllers/auth.controller.js';

import { authenticateToken } from '../middelwares/authenticateToken.js';
import { authorize } from '../middelwares/authorize.js';

const router = Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // Autorise les requêtes de n'importe quelle origine
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Autorise les headers 'Content-Type' et 'Authorization'
    next(); // Passe à la suite dans la chaîne des middlewares
});

// Route pour l'inscription des utilisateurs
router.post('/signup', registerClient);

// Route pour la connexion des utilisateurs
router.post('/login', loginClient);

// Route pour mettre à jour un utilisateur
// Protégée par l'authentification (authenticateToken) et l'autorisation (authorize)
router.put('/update/:id',  updateClient);

// Route pour supprimer un utilisateur
// De même, protégée par l'authentification et l'autorisation
router.delete('/delete/:id', authenticateToken, authorize(['admin']), deleteClient);

export default router;