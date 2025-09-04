const{ TaskRepository} = require('../repositories');
const TaskSQLite = require('../model-sqlite/task-sqlite');
const {isMySQLAvailable} = require('../utils/db-checker');
const taskRepository = new TaskRepository();

async function createTask(data) {
        try {
            if(await isMySQLAvailable()){   //Check User online or Offline
                await SQLiteToMySQL();      // Sync the data SQLite to the MYSQL
                const response = await taskRepository.create({...data,completed:true}); // create new Task in MYSQL
                return response;
            }else {
                await TaskSQLite.sync(); // Check Table exist in the SQLite if No  Generate  new table
                return await TaskSQLite.create({...data,synced:false}); // create new Task in SQLite
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
}

async function SQLiteToMySQL(){
    await TaskSQLite.sync(); // Check Table exist in the SQLite if No Generate new table
    const offlineTasks = await TaskSQLite.findAll({ where: { synced: false } }); // find Only those content where synced is false

    for (let task of offlineTasks) { // pick one by one task and give to the MYSQL
        const newTask = await taskRepository.create({
            title: task.title,
            completed: true
        });

        task.synced = true; // Do synced false because next time  pick only new data 
        await task.save();
    }
}

async function destroyTask(data) {
    try {
        if(await isMySQLAvailable()){    //Check User online or Offline
            await SQLiteToMySQL();       // Sync the data SQLite to the MYSQL
            const response = await taskRepository.destroy(data); // destroyTask to the MYSQL
            return response;
        }else {
            await TaskSQLite.sync();    // Check Table exist in the SQLite if No  Generate new table
            const task = await TaskSQLite.findByPk(data); // find Data by Primary Key in the SQLite
            if(!task){      // Check task is exist in the SQLite or not
                throw new Error('Task not found');
            } 
            return await task.destroy(); // destory task to the SQLite
        }
    } catch (error) {
        throw error;
    }
}

async function getTask(data){
    try {
        if(await isMySQLAvailable()){     //Check User online or Offline
            await SQLiteToMySQL();       // Sync the data SQLite to the MYSQL
            const response  = await taskRepository.get(data); // Get to the MYSQL
            return response;
        } else{
            await TaskSQLite.sync();    // Check Table exist in the SQLite if No  Generate new table
            return await TaskSQLite.findByPk(data);  // Get data to SQLite with the help of Primary Key
        }
    } catch (error) {
        throw error;
    }
}

async function getAllTask() {
    try {
        if(await isMySQLAvailable()){   //Check User online or Offline
            await SQLiteToMySQL();      // Sync the data SQLite to the MYSQL
            const response = await taskRepository.getAll();  // Get All Data to the MYSQL
            return response;
        }else {
            await TaskSQLite.sync();    // Check Table exist in the SQLite if No  Generate new table
            return await TaskSQLite.findAll();  // Get All Data to the SQLite
        }
    } catch (error) {
        throw error;
    }
}

async function updateTask(id,data){
    try {
         if(await isMySQLAvailable()){      //Check User online or Offline
            await SQLiteToMySQL();          // Sync the data SQLite to the MYSQL
            const response = await taskRepository.update(id,data); // Update data in the MYSQL
            return response;
         }else {
          await TaskSQLite.sync();      // Check Table exist in the SQLite if No  Generate new table
          const task = await TaskSQLite.findByPk(id); // Find data to SQLite with the help of Primary Key

          if(!task){                             // Check task is exist in the SQLite or not
            throw new Error('Task not found');
          }  
           return await task.update(data);      // Update data in the SQLite
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