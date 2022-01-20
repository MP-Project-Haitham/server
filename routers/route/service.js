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
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");
const serviceRouter = express.Router();

serviceRouter.post("/newservice",authentication, createservice);
serviceRouter.get("/service", getServices);
serviceRouter.get("/service/:id", getServiceById);
serviceRouter.delete("/deleteservice/:id",authentication, deletedServiceByUser);
//admin
serviceRouter.put( "/updateservicetitel/:id" ,authentication,updateServiceTitel);
serviceRouter.put("/updateserviceimg/:id",authentication,authorization, updateImgService);
serviceRouter.put( "/updateserviceDesc/:id" ,authentication,updateDescService);
serviceRouter.put( "/closeservice/:id" ,authentication,authorization,closeService);


serviceRouter.delete("/deleteser/:id",authentication, deletedService);

module.exports = serviceRouter;
