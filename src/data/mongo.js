const mongoose = require("mongoose");

const pass = 'mongodb+srv://anabh05:Upgrade24@cluster0.xccbjus.mongodb.net/naruto'

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("INFO: Conexión a BD correcta:", conn.connection.name);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error.message);
  }
};

module.exports = { connectMongo };
