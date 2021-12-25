const express = require("express");
const {
  createLike,
  createLikeMeetup,
createLikeMeetup,
createLikeService,
deleteLike,} = require("./../controller/like");
const { authentication } = require("./../middleware/authentication"); 
const { authorization } = require("./../middleware/authorization");

const commentRouter = express.Router();
commentRouter.post("/newcomment",authentication, createLike);
commentRouter.post("/newlikemeetup",authentication, createLikeMeetup);
commentRouter.post("/newlikeservice",authentication, createLikeService);

commentRouter.delete(
  "/dellike/:id",deleteLike);

module.exports = commentRouter;
