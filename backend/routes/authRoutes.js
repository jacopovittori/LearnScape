const express = require('express');//importo libbreria per gestire le rotte
const router = express.Router();// importo ruter per memorizare le rotte
const singupController = require('../controllers/authControllers');//importo i controllo per la registrazione

router.post('/auth/singup', singupController.singup); //aceddo alla funzione di registrazone

module.exports = router;