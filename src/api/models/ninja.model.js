const mongoose = require("mongoose");

const ninjaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  aldea: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Aldea",
  },
});

const Ninja = mongoose.model("Ninja", ninjaSchema);

module.exports = Ninja;
