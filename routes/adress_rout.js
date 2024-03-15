const express = require("express");
const router = express.Router();
const adressController = require("../controllers/adress")

router.post('/new-adress', adressController.createAdress);

module.exports = router;