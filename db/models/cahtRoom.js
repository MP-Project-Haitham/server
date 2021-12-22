const mongoose = require("mongoose");

const cahtRoom = new mongoose.Schema({

 
  fromuserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  touserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message"  }],
  data: { type: Date, default: new Date() },
});

module.exports = mongoose.model("CahtRoom", cahtRoom);
