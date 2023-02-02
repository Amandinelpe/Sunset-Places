const express = require("express");

const postRouter = express.Router();

const postController = require("../controllers/postController");
const { upload } = require("../helpers/multer");

postRouter.get("/", postController.getAllPosts);
postRouter.get("/user/:id", postController.getPostByUserId);
postRouter.post("/", upload.single("img"), postController.createPost);
postRouter.put("/:id", postController.updatePost);
postRouter.put("/upload/:id", upload.single("img"), postController.updateImage);
postRouter.delete("/:id", postController.deletePost);

module.exports = postRouter;
