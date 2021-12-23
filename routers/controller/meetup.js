const meetupModel = require("./../../db/models/meetup");
// const likeModel = require("./../../db/models/like");

const create = (req, res) => {
    const {_id} = req.params
    const {titel,post,img} = req.body;

    const newPost = new postModel({
      titel: titel,
        post: post,
      img:img,
        
    });
    newPost
    .save()
    .then((result) => {
        res.status(201).json(result);

    })
    .catch((err) => {
        res.status(400).json(err);
    })
}

const getPosts = (req, res) => {
  postModel
       .find({isdel:false})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
};
// const getPost = (req, res) => {
//   postModel
//     .find({})
//     .populate("likeId commentId")
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// };
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
  const { post , titel} = req.body;
  console.log(id);
  postModel
    .findByIdAndUpdate(id, { $set: { post } },{$set: { titel }}, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updatePostTitel = (req, res) => {
  const { id } = req.params;
  const {titel} = req.body;
  console.log(id);
  postModel
    .findByIdAndUpdate(id,{$set: { titel }}, { new: true })
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
    .findByIdAndUpdate(id, { isdel: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const closePost = (req, res) => {
  const { id } = req.params;

  console.log(id);
  postModel
    .findByIdAndUpdate(id, { isclose: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  }
module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePostTitel,
  updateImgPost,
  updateDescPost,
  deletedPostByUser,
  deletedPost,
  // getPost,
  closePost,
};