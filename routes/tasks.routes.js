const express = require('express');

const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getStatusTasks,
} = require('../controllers/tasks.controller');

const { taskExists } = require('../middlewares/tasks.middlewares');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);

tasksRouter.get('/:status', getStatusTasks);

tasksRouter.post('/', createTask);

tasksRouter.patch('/:id', taskExists, updateTask);

tasksRouter.delete('/:id', taskExists, deleteTask);

module.exports = { tasksRouter };
