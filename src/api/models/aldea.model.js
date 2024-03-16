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

  country : {
    type: String,
    required: true,
  },
 
  kage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ninja",
  },

   image: {
    type: String,
    
  },
});

const Aldea = mongoose.model("Aldea", aldeaSchema);

module.exports = Aldea;