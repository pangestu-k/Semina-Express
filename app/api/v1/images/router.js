const express = require("express");
const router = express.Router();
const upload = require("../../../middlewares/multer");

const { create } = require("./controller");

router.post("/images", upload.single("avatar"), create);

module.exports = router;
