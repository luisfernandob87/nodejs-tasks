const express = require('express');

const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require('../controllers/tasks.controller');

const { taskExists } = require('../middlewares/tasks.middlewares');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);

tasksRouter.post('/', createTask);

tasksRouter.patch('/:id', taskExists, updateTask);

tasksRouter.delete('/:id', taskExists, deleteTask);

module.exports = { tasksRouter };
