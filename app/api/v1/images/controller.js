const { createImages } = require("../../../services/mongoose/images");
const { StatusCodes } = require("http-status-codes");

//? create
const create = async (req, res, next) => {
  try {
    const result = await createImages(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
