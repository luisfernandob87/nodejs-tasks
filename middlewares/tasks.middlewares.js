const { Task } = require('../models/tasks.model');

const taskExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne(
      { where: { id } },
      { where: { status: 'active' } }
    );

    // console.log(task);
    if (!task || task.status !== 'active') {
      return res.status(404).json({
        status: 'error',
        message: 'Task not found',
      });
    }
    req.task = task;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { taskExists };
