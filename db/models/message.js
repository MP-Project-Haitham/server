const mongoose = require("mongoose");

const message = new mongoose.Schema({

 
  fromuserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  touserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  conteant: [{ type: String, required: true }],
  data: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Message", message);
