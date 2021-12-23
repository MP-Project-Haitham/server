const serviceModel = require("./../../db/models/service");

const createservice = (req, res) => {
    const {_id} = req.params
    const {titel,desc,img} = req.body;

    const newservice = new serviceModel({
      titel: titel,
        desc: desc,
      img:img,
        
    });
    newservice
    .save()
    .then((result) => {
        res.status(201).json(result);

    })
    .catch((err) => {
        res.status(400).json(err);
    })
}
const getServices = (req, res) => {
    serviceModel
         .find({isdel:false})
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
  };
  // const getServices = (req, res) => {
  //   serviceModel
  //     .find({})
  //     .populate("likeId commentId")
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch((err) => {
  //       res.status(400).json(err);
  //     });
  // };
  const getServiceById = (req, res) => {
    const { id } = req.params;
    console.log(id);
    serviceModel
      .findById(id)
      .exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  const updateImgService = (req, res) => {
    const { id } = req.params;
    const { img } = req.body;
    console.log(id);
    serviceModel
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
  const updateDescService = (req, res) => {
    const { id } = req.params;
    const { desc } = req.body;
    console.log(id);
    serviceModel
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
  const updateServiceTitel = (req, res) => {
    const { id } = req.params;
    const {titel} = req.body;
    console.log(id);
    serviceModel
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
  const deletedServiceByUser = (req, res) => {
    const { id } = req.params;
  
    console.log(id);
    serviceModel
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
  const deletedService = (req, res) => {
    const { id } = req.params;
  
    console.log(id);
    serviceModel
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
  const closeService = (req, res) => {
    const { id } = req.params;
  
    console.log(id);
    serviceModel
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
        createservice,
        getServices,
        getServiceById,
        updateImgService,
        updateDescService,
        updateServiceTitel,
        deletedServiceByUser,
        deletedService,
        closeService
    }
  
  
  
  
