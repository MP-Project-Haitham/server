const postModel = require("./../../db/models/post");
const likeModel = require("./../../db/models/like");

const createPost = (req, res) => { 
    const {img, userid, post, titel, comment, isdel, date } = req.body;
    const newPost = new postModel ({
        img, 
        userid, 
        post, 
        titel, 
    });
    newPost 
    .save()
    .then((result)=>{
res.status(201).json(err)

    })
    .cathch((err)=>{
        res.status(400).json(err)
    })
}
