const express = require("express");
const {
 createPost,
  getPosts,
  getPostById,
  updatePostTitel,
  updateImgPost,
  updateDescPost,
  deletedPostByUser,
  deletedPost,
  closePost
} = require("./../controller/post");
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");
const postRouter = express.Router();

postRouter.post("/newPost",authentication, createPost);
postRouter.get("/posts", getPosts);
postRouter.get("/post/:id", getPostById);
postRouter.delete("/deletebyuser/:id",authentication,authorization, deletedPostByUser);
//admin
postRouter.put( "/updateposttitel/:id",authentication ,updatePostTitel);
postRouter.put("/updateimg/:id",authentication ,updateImgPost);
postRouter.put( "/updatepost/:id",authentication ,updateDescPost);
postRouter.put( "/closepost/:id",authentication ,closePost);
postRouter.delete("/delete/:id",authentication, deletedPost);

module.exports = postRouter;
