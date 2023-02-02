const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM categories")
    .then((categories) => categories);
};

module.exports = {
  findAll,
};
