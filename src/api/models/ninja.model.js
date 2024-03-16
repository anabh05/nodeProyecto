const mongoose = require("mongoose");

// Definición del esquema del álbum
const ninjaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  rank: {
    type: String,
    required: true,
  },

  village : {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Aldea",
  },
 
  clan: {
    type: String,
    required: true,
  },

  group: {
    type: String,
    required: true,
  },

  jutsu: {
    type: String,
    required: true,
  },

  natureType: {
    type: String,
    required: true,
  },

  specialAttack: {
    type: String,
    required: true,
  },

   image: {
    type: String,
    
  },
});

const Ninja = mongoose.model("Ninja", ninjaSchema);

module.exports = Ninja;