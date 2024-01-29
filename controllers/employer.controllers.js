import Employer from '../models/employer.models.js';

export const getAllEmployers = async (req, res, next) => {
  try {
    const Employers = await Employer.findAll();
    res.status(200).json(Employers);
  } catch (error) {
    next(error);
  }
};

export const getEmployerById = async (req, res, next) => {
  try {
    const Employer = await Employer.findByPk(req.params.id);
    if (Employer) {
      res.status(200).json(Employer);
    } else {
      res.status(404).json({ message: 'Employer not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createEmployer = async (req, res, next) => {
  try {
    const Employer = await Employer.create(req.body);
    res.status(201).json(Employer);
  } catch (error) {
    next(error);
  }
};

export const updateEmployer = async (req, res, next) => {
  try {
    const Employer = await Employer.findByPk(req.params.id);
    if (Employer) {
      await Employer.update(req.body);
      res.status(200).json(Employer);
    } else {
      res.status(404).json({ message: 'Employer not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteEmployer = async (req, res, next) => {
  try {
    const Employer = await Employer.findByPk(req.params.id);
    if (Employer) {
      await Employer.destroy();
      res.status(200).json({ message: 'Employer deleted' });
    } else {
      res.status(404).json({ message: 'Employer not found' });
    }
  } catch (error) {
    next(error);
  }
};
