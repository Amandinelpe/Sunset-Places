const categoryModel = require("../models/categoryModel");

const categoryController = {
  getAllCategories: (_, res, next) => {
    categoryModel
      .findAll()
      .then(([categories]) => res.status(200).send(categories))
      .catch((err) => next(err));
  },
};

module.exports = categoryController;
