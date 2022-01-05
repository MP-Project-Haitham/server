const likeModel = require("./../../db/models/like");
const postModel = require("./../../db/models/post");
const meetupModel = require("./../../db/models/meetup");
const serviceModel = require("./../../db/models/service");


const createLike = (req, res) => {
  const { userId,postId } = req.body;
  const newlike = new likeModel({
    userId:req.token.id,
    postId,
});
  newlike
    .save()
    .then((result) => {
        postModel
        .findByIdAndUpdate(postId, { $push : {like: result._id}},{ upsert: true })
        
        .then((result)=>{
            res.status(201).json(result);
        })
     
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const createLikeMeetup = (req, res) => {
  const { userId,meetupId } = req.body;
  const newlike = new likeModel({
    userId:req.token.id,
    meetupId,
});
  newlike
    .save()
    .then((result) => {
        meetupModel
        .findByIdAndUpdate(meetupId, { $push : {like: result._id}},{ upsert: true })
        .then((result)=>{
            res.status(201).json(result);
        })
     
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const createLikeService = (req, res) => {
  const { userId,serviceId } = req.body;
  const newlike = new likeModel({
    userId:req.token.id,
    serviceId,
});
newlike
    .save()
    .then((result) => {
        serviceModel
        .findByIdAndUpdate(serviceId, { $push : {like: result._id}})
        .then((result)=>{
            res.status(201).json(result);
        })
     
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};




const deleteLike = (req, res) => {
  const { id } = req.params;
  likeModel
    .findByIdAndRemove(id , req.token.id)
    .exec()
    .then((result) => {
      res.status(200).json("dislike");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getLikeById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  likeModel
    .findById(id)
    .populate("userId")
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
    createLike,
    createLikeMeetup,
  createLikeMeetup,
  createLikeService,
  deleteLike,
  getLikeById,
};
