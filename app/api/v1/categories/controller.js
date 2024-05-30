const Categories = require("./model");
const mongoose = require("mongoose");
const {
  getALlCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategries,
} = require("../../../services/mongoose/categories");
const { StatusCodes } = require("http-status-codes");

//? create
const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const result = await createCategories(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//? get
const index = async (req, res, next) => {
  try {
    const result = await getALlCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//? find
const find = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await getOneCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//? update
const update = async (req, res, next) => {
  try {
    const result = await updateCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//? delete
const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategries(req);

    res.status(200).json({
      status: "success",
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  index,
  find,
  update,
  destroy,
};
