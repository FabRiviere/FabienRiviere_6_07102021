const express = require ('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauces');


// après avoir créer le routeur on remplace app par router, et on remplace la route par /

// /On créer un middleware pour pouvoir créer des sauces
// On utilise l'opérateur "spread" pour aller chercher l'ensemble des données de notre objet (fait 1 copie de ts les éléments de req.body)
// on enlève l'id du corps de la requête (on retire le champs avant de copier l'objet)
// On utilise la méthode save pr enregistrer notre objet ds la bdd. Cette méthode renvoie une Promise (on met donc un .then et un .catch pr renvoyer les réponses)
router.post('/', sauceCtrl.createSauce );

// On créer une route pour les requêtes 'PUT" qui permettra de mettre à jour(avec la méthode updateOne) un objet(une sauce)
router.put('/:id', sauceCtrl.modifySauce);

//On créer la route pour supprimer un objet avec la méthode deleteOne
router.delete('/:id', sauceCtrl.deleteSauce);

// on utilise la méthode get pr répondre aux demandes GET de cet endpoint et utilisons les : pr rendre la route accessible en tant que paramètre
// On utilise la méthode findOne ds notre modèle Sauce pr trouver le Sauce unique ayant le même _id que le paramètre de la requête
router.get('/:id', sauceCtrl.getOneSauce);

// Création des middlewares avec next pour appelé le suivant
// On passons en 1er argument la route pour laquelle ns enregistrons ce middleware et appelé par le front-end
router.get('/', sauceCtrl.getAllSauces);


// On réexporte le routeur de ce fichier la

module.exports = router;