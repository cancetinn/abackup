const express = require('express');
const router = express.Router();
const serverController = require('../controllers/serverController');

router.post('/add', serverController.addServer);

module.exports = router;
