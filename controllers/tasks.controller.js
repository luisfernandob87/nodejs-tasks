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

module.exports = { getAllTasks, createTask };
