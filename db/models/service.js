const mongoose = require("mongoose");
const service = new mongoose.Schema({
  img:{type:String },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  titel: { type: String,required: true, unique: true },
  desc: { type: String, required: true },
  price: {type: String},
  isdel: { type: Boolean, default: false},
  isclose: { type: Boolean, default: false},
  comment:{type: mongoose.Schema.Types.ObjectId, ref: "Comment"},
  date: { type: String, default: new Date() },
  tag: {type: String},
  like: {type: mongoose.Schema.Types.ObjectId, ref: "Like"},

});

module.exports = mongoose.model("Service", service);
