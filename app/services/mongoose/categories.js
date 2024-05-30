const Categories = require("../../api/v1/categories/model");
const { NotFoundError, BadRequestError } = require("../../errors");

//? service get
const getALlCategories = async (req) => {
  const result = await Categories.find({ organizer: req.user.organizer });
  return result;
};

//? service create
const createCategories = async (req) => {
  const { nama } = req.body;

  const check = await Categories.findOne({
    name: nama,
    organizer: req.user.organizer,
  });

  if (check) throw new BadRequestError("Kategori nama duplikat");

  const result = await Categories.create({
    name: nama,
    organizer: req.user.organizer,
  });

  return result;
};

//? service find
const getOneCategories = async (req) => {
  const { id } = req.params;

  const result = await Categories.findOne({
    _id: id,
    organizer: req.user.organizer,
  });
  if (!result) throw new NotFoundError(`tidak ada category dengan id : ${id}`);
  return result;
};

//? service update
const updateCategories = async (req) => {
  const { id } = req.params;
  const { nama } = req.body;

  const check = await Categories.findOne({
    nama,
    _id: id,
    organizer: req.user.organizer,
  });

  if (check) throw new BadRequestError("Kategori nama duplikat");

  const result = await Categories.findOneAndUpdate(
    { _id: id },
    { name: nama },
    { new: true, runValidators: true }
  );

  if (!result) throw new NotFoundError(`tidak ada category dengan id : ${id}`);

  return result;
};

//? service delete
const deleteCategries = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOneAndDelete({
    _id: id,
    organizer: req.user.organizer,
  });
  if (!result) throw new NotFoundError(`tidak ada category dengan id : ${id}`);
  return result;
};

//? checking categories
const checkingCategories = async (id) => {
  const result = await Categories.findOne({
    _id: id,
  });

  if (!result)
    throw new NotFoundError(`Tidak ada categories dengan id : ${id}`);

  return result;
};

module.exports = {
  getALlCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategries,
  checkingCategories,
};
