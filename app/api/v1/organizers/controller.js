const {
  createOrganizer,
  createUsers,
  getAllUsers,
} = require("../../../services/mongoose/users");
const { StatusCodes } = require("http-status-codes");

const getCMSUsers = async (req, res, next) => {
  try {
    const result = await getAllUsers(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//? create organizers
const createCMSOrganizers = async (req, res, next) => {
  try {
    const { name } = req.body;

    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//? create users
const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUsers(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCMSOrganizers,
  createCMSUser,
  getCMSUsers,
};
