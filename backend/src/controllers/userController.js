const argon2 = require("argon2");
const userModel = require("../models/userModel");
const { jwtSign, jwtVerify } = require("../helpers/jwt");

const userController = {
  getAllUsers: (req, res, next) => {
    userModel
      .findAll()
      .then(([users]) => res.status(200).send(users))
      .catch((err) => next(err));
  },

  getUserById: (req, res, next) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then(([user]) => res.status(200).send(user))
      .catch((err) => next(err));
  },
  login: (req, res, next) => {
    const { email, password } = req.body;
    userModel
      .findByEmail(email)
      .then(async ([user]) => {
        if (!user) {
          res.status(401).send({ message: "Invalid email or password" });
        } else {
          const {
            id,
            email: userEmail,
            firstName,
            lastName,
            password: hashedPassword,
          } = user;

          if (await argon2.verify(hashedPassword, password)) {
            const token = jwtSign(
              { id, userEmail, firstName, lastName },
              { expiresIn: "1h" }
            );
            res
              .cookie("acces_token", token, { httpOnly: true, secure: true })
              .status(200)
              .send({
                message: "User logged in successfully",
                id,
                email,
                firstName,
                lastName,
              });
          } else {
            res.status(404).send({ message: "Invalid email or password" });
          }
        }
      })
      .catch((err) => next(err));
  },
  verifyToken: (req, res) => {
    const { token } = req.body;

    if (!token) {
      return res.status(401).send("couldn't find temporary token");
    }
    const userInfo = jwtVerify(token);
    if (!userInfo) {
      return res.status(401).send("token expired or invalid please try again");
    }

    return res
      .status(200)
      .send({ message: "valid token", user: userInfo.email });
  },
};

module.exports = userController;
