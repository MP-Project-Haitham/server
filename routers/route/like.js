const express = require("express");
const {
createComment,
  getComment,
  createCommentMeetup,
  updateComment,
  deletedComment,
  createCommentService,
} = require("./../controller/comment");
// const { authentication } = require("./../middleware/authentication");
// const { authorization } = require("./../middleware/authorization");

const commentRouter = express.Router();
commentRouter.post("/newcomment", createLike);
commentRouter.get("/comments", getComment);
commentRouter.post("/newcommentmeetup", createCommentMeetup);
commentRouter.post("/newcommentservice", createCommentMeetup);

//admin
commentRouter.put("/updatecomment/:id",updateComment);
commentRouter.delete(
  "/delcomment/:id",deletedComment);

module.exports = commentRouter;
