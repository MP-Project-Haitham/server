const mongoose = require("mongoose");
const meetup = new mongoose.Schema({
  img:{ type:String,default: "" },
  userId:[ { type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  titel: { type: String,required: true, unique: true },
  desc: { type: String, required: true },
  isdel: { type: Boolean, default: false},
  isclose: { type: Boolean, default: false},
  comment:[{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  date: { type: String, default: new Date() },
  tag: {type: String},
  like: [{type: mongoose.Schema.Types.ObjectId, ref: "Like"}],

});

module.exports = mongoose.model("Meetup", meetup);
