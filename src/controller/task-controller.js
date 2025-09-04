const {taskService} = require('../services');

// req.body: title: milkman
async function createTask(req,res) {
    try {
        const simulateOffline = req.query.offline === 'true';
        const response = await taskService.createTask({
            title: req.body.title
        },simulateOffline);
        return res.json({
            success: true,
            message: 'Task created Successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Failed to create task',
            data: {},
            error: error.message
    });
 }
}

//req.params: id: 1
async function destroyTask(req,res){
    try {
        const simulateOffline = req.query.offline === 'true';
        const response = await taskService.destroyTask(req.params.id, simulateOffline);
        return res.json({
            success: true,
            message: 'Task deleted successfully',
            data: response,
            error: {}  
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Failed to delete task',
            data: {},
            error: error.message
    });
    }
}

//req.params: id: 1
async function getTask(req,res){
    try {
        const simulateOffline = req.query.offline === 'true';
        const response = await taskService.getTask(req.params.id,simulateOffline);
        return res.json({
            success: true,
            message: 'Task fetched successfully',
            data: response,
            error: {}  
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Failed to fetch task',
            data: {},
            error: error.message
        }); 
    }
}

async function getAllTask(req,res){
    try {
         const simulateOffline = req.query.offline === 'true';
        const response = await taskService.getAllTask(simulateOffline);
        return res.json({
            success: true,
            message: 'All tasks fetched successfully',
            data: response,
            error: {}  
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Failed to fetch tasks',
            data: {},
            error: error.message
        });  
    }
}

// req.body: title: HomeWork , req.params: id: 1
async function updateTask(req,res) {
    try {
        const simulateOffline = req.query.offline === 'true';
        const response = await taskService.updateTask(req.params.id,req.body,simulateOffline);
        return res.json({
            success: true,
            message: 'Task updated successfully',
            data: {response},
            error: {}  
        });
    } catch (error) {
        return res.json({
            success: true,
            message: 'Failed to update task',
            data: {},
            error: {error}
        });
    }
}

module.exports = {
    createTask,
    destroyTask,
    getTask,
    getAllTask,
    updateTask
}