const express = require("express");
const router = express.Router();

const { createCMSOrganizers, createCMSUser } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.post("/organizers", authenticateUser, createCMSOrganizers);
router.post("/users", authenticateUser, createCMSUser);

module.exports = router;
