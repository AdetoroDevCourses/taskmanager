const express = require('express')
const router = express.Router()

const {getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controller/tasks')


router.router('/').get(getAllTasks).post(createTask)
router.router('/:id').get(getTask).patch(updateTask).delete(deleteTask)

// http methods

module.exports = router