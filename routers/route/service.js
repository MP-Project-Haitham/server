const express = require("express");
const {
    createservice,
    getServices,
    getServiceById,
    updateImgService,
    updateDescService,
    updateServiceTitel,
    deletedServiceByUser,
    deletedService,
    closeService

} = require("./../controller/service");
// const { authentication } = require("./../middleware/authentication");
// const { authorization } = require("./../middleware/authorization");
const serviceRouter = express.Router();

serviceRouter.post("/newservice", createservice);
// meetupRouter.post("/like",authentication, like);
serviceRouter.get("/service", getServices);
serviceRouter.get("/service/:id", getServiceById);
// meetupRouter.get("/post", getPost);
serviceRouter.delete("/deleteservice/:id", deletedServiceByUser);
//admin
serviceRouter.put( "/updateservicetitel/:id" ,updateServiceTitel);
serviceRouter.put("/updateserviceimg/:id", updateImgService);
serviceRouter.put( "/updateserviceDesc/:id" ,updateDescService);
serviceRouter.put( "/closeservice/:id" ,closeService);


serviceRouter.delete("/deleteser/:id", deletedService);

module.exports = serviceRouter;
