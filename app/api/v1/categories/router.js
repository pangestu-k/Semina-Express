const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

const { create, index, find, update, destroy } = require("./controller");

router.post(
  "/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);

router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.get(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  find
);

router.put(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);

router.delete(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);

module.exports = router;
