const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.post("/login", userController.login);
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/checkToken", userController.verifyToken);

module.exports = userRouter;
