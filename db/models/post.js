const mongoose = require("mongoose");
const post = new mongoose.Schema({
  img:{type:String },
  userId:[ { type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  titel: { type: String,required: true},
  post: { type: String, required: true },
  isdel: { type: Boolean, default: false},
  isclose: { type: Boolean, default: false},
  comment:[{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  date: { type: String, default: new Date() },
  tag: {type: String},
  like:[{type: mongoose.Schema.Types.ObjectId, ref: "Like"}],

});

module.exports = mongoose.model("Post", post);
