const Ninja = require("../models/ninja.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");


const createNinja = async (req, res, next) => {
  try {
    const ninja = await Ninja.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: ninja,
    });
  } catch (error) {
    next(error);
  }
};

const getAllNinjas = async (req, res, next) => {
  try {
    const ninja = await Ninja.find().populate("aldea"); // para cuando busque el ninja me traiga los datos de la aldea y lo traiga dentro de un objate
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: ninja,
    });
  } catch (error) {
    next(error);
  }
};

const getNinjaById = async (req, res, next) => {
  try {
    const ninja = await Ninja.findById(req.params.id).populate("aldea");
    if (ninja) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: ninja,
      });
    } else {
      res.status(404).json({ status: 404, message: "Ninja not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateNinja = async (req, res, next) => {
  try {
    const ninja = await Ninja.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (track) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: track,
      });
    } else {
      res.status(404).json({ status: 404, message: "Ninja not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteNinja= async (req, res, next) => {
  try {
    const ninja = await Ninja.findByIdAndDelete(req.params.id);
    if (ninja) {
      res.status(204).json({ status: 204, message: "Ninja deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Ninja not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNinja,
  getAllNinjas,
  getNinjaById,
  updateNinja,
  deleteNinja,
};
