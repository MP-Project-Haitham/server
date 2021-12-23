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
//   getPost,
  closePost
} = require("./../controller/post");
// const { authentication } = require("./../middleware/authentication");
// const { authorization } = require("./../middleware/authorization");
const postRouter = express.Router();

postRouter.post("/newPost", createPost);
// postRouter.post("/like",authentication, like);
postRouter.get("/posts", getPosts);
postRouter.get("/post/:id", getPostById);
// postRouter.get("/post", getPost);
postRouter.delete("/deletebyuser/:id", deletedPostByUser);
//admin
postRouter.put( "/updateposttitel/:id" ,updatePostTitel);
postRouter.put("/updateimg/:id", updateImgPost);
postRouter.put( "/updatepost/:id" ,updateDescPost);
postRouter.put( "/closepost/:id" ,closePost);


postRouter.delete("/delete/:id", deletedPost);

module.exports = postRouter;
