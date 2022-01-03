const express = require("express");
const {
createComment,
  getComment,
  createCommentMeetup,
  updateComment,
  deletedComment,
  createCommentService,
} = require("./../controller/comment");
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");

const commentRouter = express.Router();
commentRouter.post("/newcomment",authentication, createComment);
commentRouter.get("/comments/:id", getComment);
commentRouter.post("/newcommentmeetup",authentication ,createCommentMeetup);
commentRouter.post("/newcommentservice",authentication, createCommentMeetup);

//admin
commentRouter.put("/updatecomment/:id",updateComment);
commentRouter.delete(
  "/delcomment/:id",deletedComment);

module.exports = commentRouter;
