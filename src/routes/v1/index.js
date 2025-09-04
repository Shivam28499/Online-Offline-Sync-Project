const express = require('express');
const {taskController} = require('../../controller');
const {taskMiddleware} = require('../../middlewares');
const router = express.Router();

// POST: /api/v1/tasks 
router.post('/tasks/',
    taskMiddleware.taskCreateChecker,
    taskController.createTask
);

//GET: /api/v1/tasks/:id
router.get('/tasks/:id',
    taskMiddleware.taskGetChecker,
    taskController.getTask
);

// GET: /api/v1/tasks
router.get('/tasks',
    taskController.getAllTask
);

// DELETE: /api/v1/taks/:id
router.delete('/tasks/:id',
    taskMiddleware.taskDestoryChecker,
    taskController.destroyTask
);

//PATCH: api/v1/tasks/:id
router.patch('/tasks/:id',
    taskMiddleware.taskUpdateChecker,
    taskController.updateTask
);


module.exports = router;