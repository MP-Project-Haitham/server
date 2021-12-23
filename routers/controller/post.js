const postModel = require("./../../db/models/post");
const likeModel = require("./../../db/models/like");

const createPost = (req, res) => {
  const { img, userid, post, titel, comment, isdel, date } = req.body;
  const newPost = new postModel({
    userid: req.token.id,
    titel,
    post,
    img,
  });
  newPost
    .save()
    .then((result) => {
      res.status(201).json(err);
    })
    .cathch((err) => {
      res.status(400).json(err);
    });
};
const getPosts = (req, res) => {
  postModel
    .find({ userid: req.token.id }, { isdel: false }, { new: true })
    .populate("like comment", "post img")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getPost = (req, res) => {
  postModel
    .find({})
    .populate("likeId commentId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getPostById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  postModel
    .findById(id)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateImgPost = (req, res) => {
  const { id } = req.params;
  const { img } = req.body;
  console.log(id);
  postModel
    .findByIdAndUpdate(id, { img }, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateDescPost = (req, res) => {
  const { id } = req.params;
  const { desc } = req.body;
  console.log(id);
  postModel
    .findByIdAndUpdate(id, { $set: { desc } }, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deletedPostByUser = (req, res) => {
  const { id } = req.params;

  console.log(id);
  postModel
    .findByIdAndUpdate(id, { isDelete: true }, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deletedPost = (req, res) => {
  const { id } = req.params;

  console.log(id);
  postModel
    .findByIdAndUpdate(id, { isDelete: true }, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = {
  createPost,
  getPosts,
  getPostById,
  updateImgPost,
  updateDescPost,
  deletedPostByUser,
  deletedPost,
  getPost,
};
