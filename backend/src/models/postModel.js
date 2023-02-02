const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM posts")
    .then((posts) => posts);
};

const findByUserId = (id) => {
  return db
    .promise()
    .query("SELECT * FROM posts WHERE user_id = ?", [id])
    .then((posts) => posts);
};

const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO posts SET ?", [payload])
    .then((post) => post);
};

const updateOne = (payload, id) => {
  return db
    .promise()
    .query("UPDATE posts SET ? WHERE id = ?", [payload, Number(id)])
    .then(([res]) => res);
};

const updateImage = (url, id) => {
  return db
    .promise()
    .query("UPDATE posts SET image_url = ? WHERE id = ?", [url, Number(id)])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM posts WHERE id = ?", [id])
    .then(([res]) => res);
};

module.exports = {
  findAll,
  findByUserId,
  createOne,
  updateOne,
  updateImage,
  deleteOne,
};
