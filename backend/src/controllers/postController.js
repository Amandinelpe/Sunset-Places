const postModel = require("../models/postModel");

const postController = {
  getAllPosts: (_, res, next) => {
    postModel
      .findAll()
      .then(([posts]) => res.status(200).send(posts))
      .catch((err) => next(err));
  },
  getPostByUserId: (req, res, next) => {
    const { id } = req.params;
    postModel
      .findByUserId(id)
      .then(([posts]) => res.status(200).send(posts))
      .catch((err) => next(err));
  },
  createPost: (req, res, next) => {
    const { title, description, categoryId, userId } = req.body;
    postModel
      .createOne({ title, description, categoryId, userId })
      .then(([post]) => res.status(201).send(post))
      .catch((err) => next(err));
  },
  updatePost: (req, res, next) => {
    const { id } = req.params;
    const { title, description, categoryId } = req.body;
    postModel
      .updateOne({ title, description, categoryId }, id)
      .then((response) => {
        if (response.affectedRows !== 0) {
          return res.status(200).send("post updated successfully");
        }
        return res.status(404).send("error updating post");
      })
      .catch((err) => next(err));
  },
  updateImage: (req, res, next) => {
    const { id } = req.params;
    const imgSrc = `${process.env.BACKEND_URL}/uploads/medias/${req.file.filename}`;
    postModel
      .updateImage(imgSrc, id)
      .then((response) => {
        if (response.affectedRows !== 0) {
          return res.status(200).send("image uploaded successfully");
        }
        return res.status(404).send("error uploading image");
      })
      .catch((err) => next(err));
  },
  deletePost: (req, res, next) => {
    const { id } = req.params;
    postModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 0) {
          return res.status(200).send("post deleted successfully");
        }
        return res.status(404).send("error deleting post");
      })
      .catch((err) => next(err));
  },
};

module.exports = postController;
