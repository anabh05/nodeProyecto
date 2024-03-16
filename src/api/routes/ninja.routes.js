const express = require("express");
const ninjaRouter = express.Router();
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware')
const { isAuth } = require('../middlewares/auth.middleware')

//////

const { createNinja,
    getAllNinjas,
    getNinjaById,
    updateNinja,
    deleteNinja, } = require("../controllers/ninja.controller");

// Ruta para crear un nuevo áldea
ninjaRouter.post("/", [upload.single("image"),uploadToCloudinary], createNinja);
ninjaRouter.get("/", getAllNinjas);
ninjaRouter.get("/:id", getNinjaById);
ninjaRouter.put("/:id", updateNinja);
ninjaRouter.delete("/:id", deleteNinja);

module.exports = ninjaRouter;
