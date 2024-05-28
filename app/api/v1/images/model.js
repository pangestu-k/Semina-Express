const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categorySchema = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Image", categorySchema);
