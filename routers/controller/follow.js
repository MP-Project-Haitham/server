const followModel = require("../../db/models/follow");
const userModel = require("../../db/models/user");

const addfollow = (req, res) => {
  const { following } = req.body;
  followModel
    .findOneAndUpdate(

      { username: req.token.id },
      { $addToSet: { following: following } },
      { upsert: true }
    )
    .then((result) => {
      followModel
        .findOneAndUpdate(
          { username: following },
          { $addToSet: { followedBy: req.token.id } },
          { upsert: true }

        )
        .then((result) => {
            // console.log("00000000000000000000000000000000000  "+req.token.id),
          res.status(201).json('done');
        });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deletefollow = (req, res) => {
   const { following } = req.body;
   followModel
     .findOneAndUpdate(
       { username: req.token.id },
       { $pull: { following: following } },
       { upsert: true }
     )
     .then((result) => {
       followModel
         .findOneAndUpdate(
           { username: following },
           { $pull: { followedBy: req.token.id } },
           { upsert: true }
         )
         .then((result) => {
           res.status(201).json(" deleted");
         });
     })
     .catch((err) => {
       res.status(400).json(err);
     });
};

module.exports = { addfollow, deletefollow };