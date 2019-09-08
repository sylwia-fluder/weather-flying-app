const { Trip, validate } = require('../models/trip');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.send(await Trip.find().sort('price'));
});

router.post('/', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const trip = new Trip({
        departureCity: req.body.departureCity,
        destinationCity: req.body.destinationCity,
        dateDeparture: req.body.dateDeparture,
        price: req.body.price
    });
    await trip.save();
    res.send(trip);
});

module.exports = router;