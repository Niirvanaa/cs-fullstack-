const express = require('express');
const router = express.Router();

// Pull in the trips controller we just built above
const tripsController = require('../controllers/trips'); 

// Define routes for our trips endpoint 
router
    .route('/trips')
    .get(tripsController.tripsList)        // GET all trips
    .post(tripsController.tripsAddTrip);   // POST a new trip

// Define route to find a specific trip by its code
router  
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip); // PUT to update a trip

module.exports = router;