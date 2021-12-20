const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  desc: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  meetupId: { type: mongoose.Schema.Types.ObjectId, ref: "Meetup" },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  isdel: { type: Boolean, default: false },
  data: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Comment", comment);
