const Images = require("../../api/v1/images/model");
const { NotFoundError, BadRequestError } = require("../../errors");

const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `upload/${req.file.filename}`
      : "uploads/avatar/default-avatar.jpg",
  });

  return result;
};

const checkingImage = async (id) => {
  const result = await Images.findOne({
    _id: id,
  });

  if (!result) throw new NotFoundError(`Tidak ada image dengan id : ${id}`);

  return result;
};

module.exports = {
  createImages,
  checkingImage,
};
