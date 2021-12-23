const express = require("express");
const {
    createMeetup,
    getMeetsup,
    getMeetupById,
    updateImgMeetup,
    updateMeetupTitel,
  updateDescMeetup,
  deletedMeetupByUser,
  deletedMeetup,
//   getPost,
closeMeetup
} = require("./../controller/meetup");
// const { authentication } = require("./../middleware/authentication");
// const { authorization } = require("./../middleware/authorization");
const meetupRouter = express.Router();

meetupRouter.post("/newmeetup", createMeetup);
// meetupRouter.post("/like",authentication, like);
meetupRouter.get("/meetup", getMeetsup);
meetupRouter.get("/meetup/:id", getMeetupById);
// meetupRouter.get("/post", getPost);
meetupRouter.delete("/deletebyuser/:id", deletedMeetupByUser);
//admin
meetupRouter.put( "/updatemeetuptitel/:id" ,updateMeetupTitel);
meetupRouter.put("/updatemeetupimg/:id", updateImgMeetup);
meetupRouter.put( "/updatemeetupDesc/:id" ,updateDescMeetup);
meetupRouter.put( "/closemeetup/:id" ,closeMeetup);


meetupRouter.delete("/deletemeetup/:id", deletedMeetup);

module.exports = meetupRouter;
