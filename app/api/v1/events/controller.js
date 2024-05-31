const {
  createEvents,
  getOneEvents,
  updateEvents,
  deleteEvents,
  getAllEvents,
  changeStatusEvents,
} = require("../../../services/mongoose/events");
const { StatusCodes } = require("http-status-codes");

//? create
const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const result = await createEvents(req);

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
    const result = await getAllEvents(req);

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

    const result = await getOneEvents(req);

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
    const result = await updateEvents(req);

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
    const result = await deleteEvents(req);

    res.status(200).json({
      status: "success",
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

const changeStatus = async (req, res, next) => {
  try {
    const result = await changeStatusEvents(req);

    res.status(StatusCodes.OK).json({
      data: result,
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
  changeStatus,
};
