const commentModel = require("./../../db/models/comment");
const postModel = require("./../../db/models/post");
const meetupModel = require("./../../db/models/meetup");
const serviceModel = require("./../../db/models/service");


const createComment = (req, res) => {
  const { userId, desc,postId } = req.body;
  const newComent = new commentModel({
    userId: req.token.id,
    desc,
    postId,
});
  newComent
    .save()
    .then((result) => {
        postModel
        .findByIdAndUpdate(postId, { $push : {comment: result._id}})
        .then((result)=>{
            res.status(201).json(result);
        })
     
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const createCommentMeetup = (req, res) => {
  const { userId, desc,meetupId } = req.body;
  const newComent = new commentModel({
    userId: req.token.id,
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
  const { userId, desc,serviceId } = req.body;
  const newComent = new commentModel({
    userId: req.token.id,
    desc,
    serviceId,
});
  newComent
    .save()
    .then((result) => {
        serviceModel
        .findByIdAndUpdate(serviceId, { $push : {comment: result._id}})
        .then((result)=>{
            res.status(201).json(result);
        })
     
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};



const getComment = (req, res) => {
  const id = req.params.id
  commentModel
    .find({postId:id})
    .populate("postId userId")

    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getCommentm = (req, res) => {
  const id = req.params.id
  commentModel
    .find({meetupId:id})
    .populate("meetupId")
    .populate("userId")

    
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getComments = (req, res) => {
  const id = req.params.id
  commentModel
    .find({serviceId:id})
    .populate("serviceId")
    .populate("userId")

    
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
  createComment,
  getComment,
  createCommentMeetup,
  createCommentService,
  updateComment,
  deletedComment,
  getCommentm,
  getComments,
};
