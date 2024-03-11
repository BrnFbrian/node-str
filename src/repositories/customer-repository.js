"use strict";
const mongoose = require("mongoose");
const Custumer = mongoose.model("Custumer");

exports.create = async(data) => {
    var custumer = new Custumer(data);
    await custumer.save();
  };
  