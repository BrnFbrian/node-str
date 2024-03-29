"use strict";

const ValidationContract = require("../validators/validator");
const repository = require("../repositories/customer-repository");

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(
      req.body.name,
      3,
      "O nome deve conter pelo menos 3 caracteeres"
    );
    contract.isEmail(
      req.body.email,
      3,
      "E-mail inválido."
    );
    contract.hasMinLen(
      req.body.password,
      6,
      "A senha deve conter pelo menos 6 caracteeres"
    );
  
    //se os dados forem invalidos
    if (!contract.isValid()) {
      res.status(400).send(contract.errors()).end();
      return;
    }
  
    try {
      await repository.create(req.body);
      res.status(201).send({
        message: "Cliente cadastrado com sucesso!",
      });
    } catch (e) {
      res.status(500).send({
        message: "Falha ao processar a requisição.",
      });
    }
  };