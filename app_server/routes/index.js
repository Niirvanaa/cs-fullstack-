
const express = require('express');
const router = express.Router();

// Require the correct controller for this folder!
const travelController = require('../controllers/travel'); 

/* GET travel webpage */
router.get('/travel', travelController.travel); 

module.exports = router;