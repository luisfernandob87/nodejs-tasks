const { Task } = require('../models/tasks.model');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getStatusTasks = async (req, res) => {
  try {
    const { status } = req.params;

    const tasks = await Task.findOne({
      where: { status },
    });
    if (!tasks) {
      return res.status(404).json({
        status: 'error',
        message: 'Status not exist',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, userId, startDate, limitDate } = req.body;
    const newTask = await Task.create({ title, userId, startDate, limitDate });
    res.status(201).json({
      status: 'success',
      data: { newTask },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { finishDate } = req.body;
    const { task } = req;

    await task.update({ finishDate });

    res.status(200).json({
      status: 'success',
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { task } = req;
    await task.update({ status: 'cancelled' });
    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getStatusTasks,
};
