const express = require("express");

const router = express.Router();
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const postRouter = require("./postRouter");

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/post", postRouter);

module.exports = router;
