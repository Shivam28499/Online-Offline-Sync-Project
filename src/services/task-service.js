const{ TaskRepository} = require('../repositories');
// const { TaskSQLiteRepository } = require('../repositories');
const TaskSQLite = require('../model-sqlite/task-sqlite');
const {isMySQLAvailable} = require('../utils/db-checker');
const taskRepository = new TaskRepository();
// const taskSQLiteRepository = new TaskSQLiteRepository();

async function createTask(data) {
        try {
            if(await isMySQLAvailable()){
                await SQLiteToMySQL();
                const response = await taskRepository.create({...data,completed:true});
                return response;
            }else {
                await TaskSQLite.sync();
                return await TaskSQLite.create({...data,synced:false});
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
}

async function SQLiteToMySQL(){
    await TaskSQLite.sync(); 
    const offlineTasks = await TaskSQLite.findAll({ where: { synced: false } });

    for (let task of offlineTasks) {
        const newTask = await taskRepository.create({
            title: task.title,
            completed: true
        });

        task.synced = true;
        await task.save();
    }
}

async function destroyTask(data) {
    try {
        if(await isMySQLAvailable()){
            await SQLiteToMySQL();
            const response = await taskRepository.destroy(data);
            return response;
        }else {
            await TaskSQLite.sync();
            const task = await TaskSQLite.findByPk(data);
            if(!task){
                throw new Error('Task not found');
            } 
            return await task.destroy();
        }
    } catch (error) {
        throw error;
    }
}

async function getTask(data){
    try {
        if(await isMySQLAvailable()){
            await SQLiteToMySQL();
            const response  = await taskRepository.get(data);
            return response;
        } else{
            await TaskSQLite.sync();
            return await TaskSQLite.findByPk(data);
        }
    } catch (error) {
        throw error;
    }
}

async function getAllTask() {
    try {
        if(await isMySQLAvailable()){
            await SQLiteToMySQL();
            const response = await taskRepository.getAll();
            return response;
        }else {
            await TaskSQLite.sync();
            return await TaskSQLite.findAll();
        }
    } catch (error) {
        throw error;
    }
}

async function updateTask(id,data){
    try {
         if(await isMySQLAvailable()){
            await SQLiteToMySQL();
            const response = await taskRepository.update(id,data);
            return response;
         }else {
          await TaskSQLite.sync();
          const task = await TaskSQLite.findByPk(id);
          if(!task){
            throw new Error('Task not found');
          }  
           return await task.update(data);
         }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createTask,
    destroyTask,
    getTask,
    getAllTask,
    updateTask
}