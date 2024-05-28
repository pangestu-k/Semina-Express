const Images = require("../../api/v1/images/model");

const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `upload/${req.file.filename}`
      : "uploads/avatar/default-avatar.jpg",
  });

  return result;
};

module.exports = {
  createImages,
};
