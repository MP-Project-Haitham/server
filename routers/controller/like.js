const likeModel = require("./../../db/models/like");
const postModel = require("./../../db/models/post");
const meetupModel = require("./../../db/models/meetup");
const serviceModel = require("./../../db/models/service");


const createLike = (req, res) => {
    console.log(req.token);
  const { userId,postId } = req.body;
  const newComent = new likeModel({
    postId,
});
  newLike
    .save()
    .then((result) => {
        postModel
        .findByIdAndUpdate(postId, { $push : {like: result._id}})
        .then((result)=>{
            res.status(201).json(result);
        })
     
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const createCommentMeetup = (req, res) => {
    console.log(req.token);
  const { userId, desc,meetupId } = req.body;
  const newComent = new commentModel({
    desc,
    meetupId,
});
  newComent
    .save()
    .then((result) => {
        meetupModel
        .findByIdAndUpdate(meetupId, { $push : {comment: result._id}})
        .then((result)=>{
            res.status(201).json(result);
        })
     
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const createCommentService = (req, res) => {
    console.log(req.token);
  const { userId, desc,serviceId } = req.body;
  const newComent = new commentModel({
    desc,
    serviceId,
});
  newComent
    .save()
    .then((result) => {
        serviceModel
        .findByIdAndUpdate(meetupId, { $push : {comment: result._id}})
        .then((result)=>{
            res.status(201).json(result);
        })
     
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


const getComment = (req, res) => {
  commentModel
    .find({userId: req.token.id, isdel: false }).populate("postId","post -_id")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateComment = (req, res) => {
  const { id } = req.params;
  const { desc } = req.body;

  console.log(id);
  commentModel
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

const deletedComment = (req, res) => {
  const { id } = req.params;

  console.log(id);
  commentModel
    .findByIdAndRemove(id, { new: true })
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
    createLike,
  getComment,
  createCommentMeetup,
  createCommentService,
  updateComment,
  deletedComment,
};
