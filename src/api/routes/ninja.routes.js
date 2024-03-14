const express = require("express");
const ninjaRouter = express.Router();
const {
  createNinja,
  getAllNinjas,
  getNinjaById,
  updateNinja,
  deleteNinja,
} = require("../controllers/ninja.controller");
const { isAuth } = require('../middlewares/auth.middleware');

ninjaRouter.post("/", createNinja);
ninjaRouter.get("/", getAllNinjas);
ninjaRouter.get("/:id", getNinjaById);
ninjaRouter.patch("/:id", updateNinja);
ninjaRouter.delete("/:id", deleteNinja);

module.exports = ninjaRouter;
