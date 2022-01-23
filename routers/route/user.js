const express = require("express");
const { populate } = require("../../db/models/user");

// const popupTools = require("popup-tools");
// const passport = require("passport");
// require("./../../Config/passport")
const {
    Register,
    login,
    deletedUser,
    getUser,
    verifyAccount,
    checkEmail,
    resetPassword,
    getAllUsers,
    bannedUser,
    unbannedUser,
    updateusername,
    updateavatar,
} = require("./../controller/user");
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");

const userRouter = express.Router();
userRouter.post("/signup", Register);
userRouter.post("/login", login);
userRouter.post("/verify_account", verifyAccount);
userRouter.post("/email_check", checkEmail);
userRouter.post("/reset_pass", resetPassword);
userRouter.post("/updateusername/:id" ,updateusername);
userRouter.post("/updateavatar/:id", updateavatar);


// userRouter.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );
// userRouter.get(
//   "/auth/google/callback",
//   passport.authenticate("google"),
//   (req, res) => {
//     console.log(req);
//     res.end(popupTools.popupResponse(req.user));
//   }
// );

//admin
userRouter.delete("/del_user/:id", deletedUser);
userRouter.put("/banned_user/:id", bannedUser);
userRouter.put("/unbannd_buser/:id", unbannedUser);
userRouter.get("/user/:id", getUser);
userRouter.get("/users", getAllUsers);


module.exports = userRouter;
