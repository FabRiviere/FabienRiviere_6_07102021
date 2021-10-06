const mongoose = require('mongoose');

// Création du shéma de données contenant les champs souhaités
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufactured: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: [{ type: String, required: true }],
    usersDisliked:[{ type: String, required: true }],
});

// export du shéma en tant que modèle , pour le rendre disponible dans express et simplifier la lecture et l'ecriture dans la BDD
module.exports = mongoose.model('Sauce', sauceSchema);