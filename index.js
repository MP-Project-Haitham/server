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








const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`SERVER RUN ON ${PORT}`);
});