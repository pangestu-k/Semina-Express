const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");

//? create organizers
const createOrganizer = async (req) => {
  const { organizer, name, email, role, password, confirmPassword } = req.body;

  if (password != confirmPassword) {
    throw new BadRequestError("Password tidak sama");
  }

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    name,
    email,
    role,
    password,
    organizer: result._id,
  });

  // untuk menghapus password di reponse
  delete users._doc.password;

  return users;
};

//? create users
const createUsers = async (req) => {
  const { name, email, role, password, confirmPassword } = req.body;

  if (password != confirmPassword) {
    throw new BadRequestError("Password tidak sama");
  }

  const users = await Users.create({
    name,
    email,
    role,
    password,
    organizer: req.user.organizer,
  });

  delete users._doc.password;

  return users;
};

const getAllUsers = async (req) => {
  const result = await Users.find();

  return result;
};

module.exports = {
  createOrganizer,
  createUsers,
  getAllUsers,
};
