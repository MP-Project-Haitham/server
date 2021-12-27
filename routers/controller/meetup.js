const meetupModel = require("./../../db/models/meetup");
const likeModel = require("./../../db/models/like");
const commentModel = require("./../../db/models/comment");
const createMeetup = (req, res) => {
    const {_id} = req.params
    const {titel,desc,img,userId} = req.body;

    const newMeetup = new meetupModel({
      userId:req.token.id,
      titel: titel,
      desc: desc,
      img:img,
        
    });
    newMeetup
    .save()
    .then((result) => {
        res.status(201).json(result);

    })
    .catch((err) => {
        res.status(400).json(err);
    })
}

const getMeetsup = (req, res) => {
    meetupModel
       .find({isdle:false})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
};

const getMeetupById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  meetupModel
    .findById(id,{ new: true }).populate("comment","desc -_id")
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateImgMeetup = (req, res) => {
  const { id } = req.params;
  const { img } = req.body;
  console.log(id);
  meetupModel
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
const updateDescMeetup = (req, res) => {
  const { id } = req.params;
  const { desc } = req.body;
  console.log(id);
  meetupModel
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
const updateMeetupTitel = (req, res) => {
  const { id } = req.params;
  const {titel} = req.body;
  console.log(id);
  meetupModel
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
const deletedMeetupByUser = (req, res) => {
  const { id } = req.params;

  console.log(id);
  meetupModel
    .findByIdAndUpdate(id,{ isdel: true}, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deletedMeetup = (req, res) => {
  const { id } = req.params;

  console.log(id);
  meetupModel
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
const closeMeetup = (req, res) => {
  const { id } = req.params;

  console.log(id);
  meetupModel
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
  createMeetup,
  getMeetsup,
  getMeetupById,
  updateMeetupTitel,
  updateImgMeetup,
  updateDescMeetup,
  deletedMeetupByUser,
  deletedMeetup,
  closeMeetup,
};
