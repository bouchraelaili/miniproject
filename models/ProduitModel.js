const mongoose = require("mongoose");

const ProduitModel = mongoose.model(
  "miniprojet",
  {
    nom: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    prix: {
      type:Number,
      required: true

    }
  },
  "Produit"
);

module.exports = { ProduitModel };