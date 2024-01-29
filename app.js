
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './routes/auth.routes.js'
import adressRouter from './routes/adresse.route.js'
import commandeRouter from './routes/commande.route.js'
import itemeRouter from './routes/item.route.js'
import ligneCommandeRouter from './routes/lignecommande.route.js'
import livraisonRouter from './routes/livraison.route.js'
import reservationRouter from './routes/reservation.route.js'
import tableRouter from './routes/table.route.js'
import { errorHandler } from './middelwares/errorHandler.js';
import { sequelize } from './Config/config.js';

import { config } from 'dotenv';

config();

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.use('/api/table', tableRouter);
app.use('/api/reservation', reservationRouter);
app.use('/api/livraison', livraisonRouter);
app.use('/api/ligneCommande', ligneCommandeRouter);
app.use('/api/item', itemeRouter);
app.use('/api/commande', commandeRouter);
app.use('/api/adresse', adressRouter);
app.use('/api/auth', authRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});