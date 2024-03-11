"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conexão com Banco
mongoose.connect('mongodb+srv://root:root@cluster0.swujg3s.mongodb.net/');

// Carregar os Models
const Customer = require('./models/customer');
const Product = require('./models/product');
const Order = require('./models/order');


// Carregar as Rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");
const customerRoute = require("./routes/customer-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/cutomers", customerRoute);

module.exports = app;
