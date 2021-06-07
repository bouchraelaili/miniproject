const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { ProduitModel } = require('../models/ProduitModel');

// ******** get all Product***************
router.get('/', (req, res) => {
  ProduitModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get Product : " + err);
  })
});

// *****Add Product******
router.post('/', (req, res) => {
  const newRecord = new ProduitModel({
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,

  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new Product : ' + err);
  })
});
//  ***** update Product******

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  const updateRecord = {
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,
  };

  ProduitModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
});
// ****Delete Product***********

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
    ProduitModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
});

module.exports = router;