const createTokenUser = (user) => {
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    user_id: user._id,
    organizer: user.organizer,
  };
};

const createTokenParticipant = (participant) => {
  return {
    lastName: participant.lastName,
    participantId: participant._id,
    firstName: participant.firstName,
    email: participant.email,
  };
};

module.exports = { createTokenUser, createTokenParticipant };
