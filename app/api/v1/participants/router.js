const express = require("express");
const router = express();
const {
  signup,
  activeParticipant,
  signin,
  getAllLandingPage,
} = require("./controller");

const { authenticateParticipant } = require("../../../middlewares/auth");

router.post("/auth/signup", signup);
router.post("/auth/signin", signin);
router.put("/active", activeParticipant);
router.get("/events", getAllLandingPage);

module.exports = router;
