const Users = require("../../api/v1/users/model");
const { NotFoundError, BadRequestError } = require("../../errors");
const { createTokenUser, createJWT } = require("../../utils");

const signin = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Email dan Password Harus di Isi");
  }

  const result = await Users.findOne({ email });

  if (!result) {
    throw new NotFoundError("Kredential Anda Invalid");
  }

  const isPasswordMatch = await result.comparePassword(password);

  if (!isPasswordMatch) {
    throw new NotFoundError("Kredential Anda Invalid");
  }

  const token = createJWT({ payload: createTokenUser(result) });

  return token;
};

module.exports = {
  signin,
};
