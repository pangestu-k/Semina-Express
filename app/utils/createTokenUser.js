const createTokenUser = (user) => {
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    user_id: user._id,
    organizer: user.organizer,
  };
};

module.exports = {
  createTokenUser,
};
