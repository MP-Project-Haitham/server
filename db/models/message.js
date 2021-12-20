const mongoose = require("mongoose");

const message = new mongoose.Schema({
  titel: { type: String, required: true },
  desc: { type: String, required: true },
  fromuserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  touserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isdel: { type: Boolean, default: false },
  data: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Message", message);
