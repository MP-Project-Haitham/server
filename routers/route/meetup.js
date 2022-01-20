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
closeMeetup
} = require("./../controller/meetup");
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");
const meetupRouter = express.Router();

meetupRouter.post("/newmeetup",authentication, createMeetup);
meetupRouter.get("/meetup", getMeetsup);
meetupRouter.get("/meetup/:id", getMeetupById);
meetupRouter.delete("/deletebyuser/:id",authentication,authorization, deletedMeetupByUser);
//admin
meetupRouter.put( "/updatemeetuptitel/:id" ,authentication,updateMeetupTitel);
meetupRouter.put("/updatemeetupimg/:id",authentication,authorization, updateImgMeetup);
meetupRouter.put( "/updatemeetupDesc/:id",authentication ,updateDescMeetup);
meetupRouter.put( "/closemeetup/:id" ,authentication,authorization,closeMeetup);


meetupRouter.delete("/deletemeetup/:id",authentication,authorization, deletedMeetup);

module.exports = meetupRouter;
