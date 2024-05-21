const Categories = require("./model");
const mongoose = require("mongoose");

//? create
const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({
        status: "fail",
        message: "Gagal menambahkan kategori. Nama kategori harus diisi",
      });
    }

    const result = await Categories.create({ name });

    res.status(201).json({
      status: "success",
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

//? get
const index = async (req, res, next) => {
  try {
    const result = await Categories.find();

    res.status(201).json({
      status: "success",
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

//? find
const find = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({
        status: "fail",
        message: "format id tidak valid",
      });
    }

    const result = await Categories.findOne({ _id: id });

    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "Kategori tidak ditemukan",
      });
    }

    res.status(201).json({
      status: "success",
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

//? update
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({
        status: "fail",
        message: "format id tidak valid",
      });
    }

    const result = await Categories.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "Kategori tidak ditemukan",
      });
    }

    res.status(201).json({
      status: "success",
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

//? delete
const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({
        status: "fail",
        message: "format id tidak valid",
      });
    }

    const result = await Categories.findOneAndDelete({ _id: id });

    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "Kategori tidak ditemukan",
      });
    }

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
