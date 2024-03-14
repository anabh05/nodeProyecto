const express = require("express");
const aldeaRouter = express.Router();
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware')
const { isAuth } = require('../middlewares/auth.middleware')

//////

const { createAldea,
    getAllAldeas,
    getAldeaById,
    updateAldea,
    deleteAldea, } = require("../controllers/aldea.controller");

// Ruta para crear un nuevo áldea
aldeaRouter.post("/", [upload.single("image"),uploadToCloudinary], createAldea);
aldeaRouter.get("/", getAllAldeas);
aldeaRouter.get("/:id", getAldeaById);
aldeaRouter.put("/:id", updateAldea);
aldeaRouter.delete("/:id", deleteAldea);

module.exports = aldeaRouter;
