const CrudRepository = require('./crud-repository');
const {Task} = require('../models'); 

class TaskRepository extends CrudRepository{
    constructor(){
        super(Task); // passing the Model to the CrudRepository
    }
}

module.exports = TaskRepository;