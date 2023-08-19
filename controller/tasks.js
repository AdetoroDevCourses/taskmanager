const Task = require("../models/Task");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyasyncWrapper(async (req, res) => {
  const tasks = await Task.create(req.body);
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(`No task with id ; ${taskID}`, 404);
  } else {
    res.status(200).json({ task });
  }
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(`No task with id ; ${taskID}`, 404);
  } else {
    res.status(200).json({ task });
  }
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(`No task with id ; ${taskID}`, 404);
  } else {
    res.status(200).json({ task });
  }
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };

// CRUD