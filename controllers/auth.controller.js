// Importation des modules nécessaires
import bcrypt from 'bcryptjs'; // Pour le hachage des mots de passe
import jwt from 'jsonwebtoken'; // Pour créer des tokens JWT
import Client from '../models/client.model.js'; // Le modèle Sequelize pour les utilisateurs

// Clé secrète pour les tokens JWT, à stocker de préférence dans une variable d'environnement
const secret = process.env.JWT_SECRET || 'your_jwt_secret';

// Fonction pour enregistrer un nouvel utilisateur
export const registerClient = async (req, res) => {
  try {
    // Récupération des données d'inscription de l'utilisateur
    const { nom, prenom, email, password, telephone, adresse } = req.body;

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Création de l'utilisateur avec le mot de passe haché
    const newClient = await Client.create({
      nom,
      prenom,
      email,
      password: hashedPassword,
      telephone,
      adresse,
      role: "client", // Par défaut, l'utilisateur aura le rôle 'client'
    });

    // Réponse avec le statut 201 (Created) et les données de l'utilisateur créé
    //res.status(201).json(newClient);

    res.status(201).json({ message: 'Compte cree avec succes',  newClient});
    
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({ message: 'Erreur lors de la création de l’utilisateur', error });
  }
};
export const loginClient = async (req, res) => {
  try {
    // Récupération des données de connexion
    const { email, password } = req.body;

    // Recherche de l'utilisateur par son email
    const client = await Client.findOne({ where: { email } });

    // Si l'utilisateur n'est pas trouvé, renvoie une erreur 404
    if (!client) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérification si le mot de passe est correct
    const isPasswordCorrect = await bcrypt.compare(password, client.password);

    // Si le mot de passe est incorrect, renvoie une erreur 400
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    // Si le mot de passe est correct, création d'un token JWT
    const token = jwt.sign({ email: client.email, id: client.id, role: client.role }, secret, { expiresIn: '1h' });

    // Renvoie les informations de l'utilisateur et le token
    res.status(200).json({ message: 'Connexion réussie', result: client, token });
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({ message: 'Erreur lors de la connexion', error });
  }
};


export const updateClient = async (req, res) => {
  // Récupération de l'ID de l'utilisateur à partir des paramètres de la requête
  const { id } = req.params;
  // Récupération des données à mettre à jour
  const { nom, prenom, telephone, password, role } = req.body;

  try {
    // Recherche de l'utilisateur par son ID
    const client = await Client.findByPk(id);

    // Si l'utilisateur n'est pas trouvé, renvoie une erreur 404
    if (!client) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Hachage du nouveau mot de passe s'il est fourni, sinon utilise le mot de passe actuel
    const hashedPassword = password ? await bcrypt.hash(password, 12) : client.password;

    // Mise à jour de l'utilisateur avec les nouvelles données
    const updatedClient = await client.update({ nom, prenom, telephone, password: hashedPassword, role });

    // Renvoie les informations de l'utilisateur mis à jour
    res.status(200).json({ result: updatedClient });
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l’utilisateur', error });
  }
};


// Méthode pour supprimer un utilisateur
export const deleteClient = async (req, res) => {
  // Récupération de l'ID de l'utilisateur à partir des paramètres de la requête
  const { id } = req.params;

  try {
    // Recherche de l'utilisateur par son ID
    const client = await Client.findByPk(id);

    // Si l'utilisateur n'est pas trouvé, renvoie une erreur 404
    if (!client) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Suppression de l'utilisateur
    await client.destroy();

    // Renvoie une confirmation de la suppression
    res.status(200).json({ message: 'Utilisateur supprimé' });
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({ message: 'Erreur lors de la suppression de l’utilisateur', error });
  }
};
