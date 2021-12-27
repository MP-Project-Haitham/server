const express = require("express");
const {
  createLike,
  createLikeMeetup,
createLikeService,
deleteLike,} = require("./../controller/like");
const { authentication } = require("./../middleware/authentication"); 
const { authorization } = require("./../middleware/authorization");

const likeRouter = express.Router();
likeRouter.post("/newlike",authentication, createLike);
likeRouter.post("/newlikemeetup",authentication, createLikeMeetup);
likeRouter.post("/newlikeservice",authentication, createLikeService);

likeRouter.delete(
  "/dellike/:id",deleteLike);

module.exports = likeRouter;
