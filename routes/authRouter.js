const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/', authController.auth);

module.exports = router;
