const express = require("express");
const {
createComment,
  getComment,
  createCommentMeetup,
  updateComment,
  deletedComment,
  createCommentService,
  getCommentm,
  getComments,
} = require("./../controller/comment");
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");

const commentRouter = express.Router();
commentRouter.post("/newcomment",authentication, createComment);
commentRouter.get("/comments/:id", getComment);
commentRouter.get("/commentsm/:id", getCommentm);
commentRouter.get("/commentss/:id", getComments);
commentRouter.post("/newcommentmeetup",authentication ,createCommentMeetup);
commentRouter.post("/newcommentservice",authentication, createCommentService);

//admin
commentRouter.put("/updatecomment/:id",updateComment);
commentRouter.delete(
  "/delcomment/:id",deletedComment);

module.exports = commentRouter;
