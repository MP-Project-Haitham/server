const express = require("express");
const { addfollow, deletefollow } = require("./../controller/follow");

const { authentication } = require("./../middleware/authentication"); 
const { authorization } = require("./../middleware/authorization");



const followRouter = express.Router();
followRouter.post("/follow", authentication, addfollow);
followRouter.delete("/deletefollow", authentication, deletefollow);

module.exports = followRouter;