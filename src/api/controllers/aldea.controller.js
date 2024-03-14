const Aldea = require("../models/aldea.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");



const createAldea = async (req, res, next) => {
  
  try {
    const { name, habitants, pais } = req.body
    const image = req.file?req.file.path:""// una ternaria para saber si nos han enviado el archivo
    const aldea = await Aldea.create({name, habitants, pais, image});

    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: aldea,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAldeas = async (req, res, next) => {
  try {
    const aldeas = await Aldea.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: aldeas,
    });
  } catch (error) {
    next(error);
  }
};

const getAldeaById = async (req, res, next) => {
  try {
    const aldea = await Aldea.findById(req.params.id);
    if (aldea) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: aldea,
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

const updateAldea = async (req, res, next) => {
  try {
    const aldea = await Aldea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (aldea) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: aldea,
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

const deleteAldea = async (req, res, next) => {
  try {
    const aldea = await Aldea.findByIdAndDelete(req.params.id);
    if (aldea) {
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
  createAldea,
  getAllAldeas,
  getAldeaById,
  updateAldea,
  deleteAldea,
};
