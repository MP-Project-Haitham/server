const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db");

const app = express();
app.use(express.json());
app.use(cors());

const roleRouter = require('./routers/route/role');
app.use(roleRouter);


const userRouter = require('./routers/route/user');
app.use(userRouter);

const postRouter = require('./routers/route/post');
app.use(postRouter);

const meetupRouter = require('./routers/route/meetup');
app.use(meetupRouter);

const serviceRouter = require('./routers/route/service');
app.use(serviceRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`SERVER RUN ON ${PORT}`);
});