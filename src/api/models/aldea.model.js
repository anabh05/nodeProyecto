const mongoose = require("mongoose");

// Definición del esquema del álbum
const aldeaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  habitants: {
    type: Number,
    required: true,
  },

  pais : {
    type: String,
    required: true,
  },
  image: {
    type: String,
    
  },
});

const Aldea = mongoose.model("Aldea", aldeaSchema);

module.exports = Aldea;