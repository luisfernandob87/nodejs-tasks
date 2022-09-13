const express = require('express');

const { createTask, getAllTasks } = require('../controllers/tasks.controller');

const { taskExists } = require('../middlewares/tasks.middlewares');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);

tasksRouter.post('/', createTask);
