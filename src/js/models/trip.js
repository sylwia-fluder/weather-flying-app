const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Trip = mongoose.model('Trip', new mongoose.Schema({
    departureCity: {
        type: String,
        required: true
    },
    destinationCity: {
        type: String,
        required: true
    },
    dateDeparture: {
        type: Date,
        default: Date.now
    },
    price: {
        type: String,
        required: true,
        min: 0
    }
}));

const validateTrip = trip => {
    const schema = {
        destinationCity: Joi.string().required(),
        departureCity: Joi.string().required(),
        price: Joi.number().min(0).required()
    };
    return Joi.validate(trip, schema);
}

exports.Trip = Trip;
exports.validate = validateTrip;