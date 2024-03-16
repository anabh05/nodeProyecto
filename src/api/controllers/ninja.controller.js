const Ninja = require("../models/ninja.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");



const createNinja = async (req, res, next) => {
  
  try {
    const { name, age, rank, village, clan, group, jutsu, natureType, specialAttack} = req.body
    const image = req.file?req.file.path:""// una ternaria para saber si nos han enviado el archivo
    const ninja = await Ninja.create({name, age, rank, village, clan, group, jutsu, natureType, specialAttack, image});

    res.status(201).json({
      status: 201,
      // message: HTTPSTATUSCODE[201],
      data: ninja,
    });
  } catch (error) {
    next(error);
  }
};

const getAllNinjas = async (req, res, next) => {
  try {
    const ninja = await Ninja.find().populate("village"); // para cuando busque el ninja me traiga los datos de la aldea y lo traiga dentro de un objate
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
    const ninja = await Ninja.findById(req.params.id);
    if (ninja) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: ninja,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
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
    if (ninja) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: ninja,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteNinja = async (req, res, next) => {
  try {
    const ninja = await Ninja.findByIdAndDelete(req.params.id);
    if (ninja) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
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
