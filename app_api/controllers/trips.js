const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Require model
const Model = mongoose.model('trips');

// GET: tripsList - list all the trips
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // An empty object returns all records
        .exec();

    if(!q) { // Database returned no data
        return res
            .status(404)
            .json({ "message": "Trips not found" });
    } else { // Return resulting trip list
        return res 
            .status(200)
            .json(q);
    }
};

// GET: tripsFindByCode - find a single trip by its code
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

    // uncomment the following line to show all query 
    // on the console
    // console.log(q)

    if(!q) { // Database returned no data
        return res
            .status(404)
            .json({ "message": "Trip not found" }); // Replaced 'err' here to prevent a future crash
    } else { // Return resulting trip list
        return res 
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};