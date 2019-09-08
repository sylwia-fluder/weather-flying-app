const Joi = require('@hapi/joi');
const express = require('express');
const trips = require('./js/routes/trips');
const app = express();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://user:user@codersproject-iloro.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    client.close();
});

app.use(express.json());
app.use('api/trips', trips);

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});