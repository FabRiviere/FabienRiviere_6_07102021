const express = require('express');

const mongoose = require('mongoose');
// on importe les routeurs
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://fabsolo:FabSabKat2311@cluster0.ktvxb.mongodb.net/fabPiiquante?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology: true    })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// Pour éviter les erreurs de CORS, on ajoute middleware suivant qui :
// permet aux headers d'accéder depuis n'importe quelle origine('*'),ajouter les headers mentionnés aux requêtes envoyées vers notre api
// d'envoyer des requêtes avec les méthodes mentionnées(Get,Post,Put,etc.)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//   utilisation de la méthode express.json en remplacement de body-parser
app.use(express.json());

// On enregistre notre routeur
app.use('api/sauces', sauceRoutes);
app.use('api/auth', userRoutes);
  

module.exports = app;