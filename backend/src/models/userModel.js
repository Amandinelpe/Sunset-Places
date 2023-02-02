const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM users")
    .then((users) => users);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM users where id = ?", [id])
    .then(([user]) => user);
};
const findByEmail = (email) => {
  return db
    .promise()
    .query(
      "SELECT id, email, first_name AS firstName, last_name AS lastName, password FROM users where email = ?",
      [email]
    )
    .then(([user]) => user);
};

module.exports = {
  findAll,
  findOne,
  findByEmail,
};
