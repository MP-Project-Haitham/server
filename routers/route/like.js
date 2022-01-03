const express = require("express");
const {
  createLike,
  createLikeMeetup,
createLikeService,
getLikeById,
deleteLike,} = require("./../controller/like");
const { authentication } = require("./../middleware/authentication"); 
const { authorization } = require("./../middleware/authorization");

const likeRouter = express.Router();
likeRouter.post("/newlike",authentication, createLike);
likeRouter.post("/newlikemeetup",authentication, createLikeMeetup);
likeRouter.post("/newlikeservice",authentication, createLikeService);
likeRouter.get("/like/:id", getLikeById);
likeRouter.delete(
  "/dellike/:id",authentication,deleteLike);

module.exports = likeRouter;
