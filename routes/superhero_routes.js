const express = require("express");
const router = express.Router();
const superheroController = require("../controllers/superhero");

router.post('/new-superhero', superheroController.createSuperhero);

module.exports = router;