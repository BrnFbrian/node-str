"use strict";

const repository = require("../repositories/order-repository");
const guid = require('guid');

exports.get = async (req, res, next) => {
    try {
      var data = await repository.get();
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({
        message: "Falha ao processar a requisição.",
      });
    }
  };

exports.post = async (req, res, next) => {
    try {
      await repository.create({
        customer: req.body.customer,
        number: guid.raw().substring(0, 6),
        itens: req.body.itens,
      });
      res.status(201).send({
        message: "Pedido cadastrado com sucesso!",
      });
    } catch (e) {
      res.status(500).send({
        message: "Falha ao processar a requisição.",
      });
    }
  };