const mongoose = require("mongoose");

const like = new mongoose.Schema({
  postid: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  meetupId: { type: mongoose.Schema.Types.ObjectId, ref: "Meetup" },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});


module.exports = mongoose.model("Like", like);
